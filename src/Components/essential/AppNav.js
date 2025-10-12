import { Link, useLocation, useNavigate } from "react-router-dom";
import AppImage from "./AppImage";
import AppButton from "./AppButton";
import { LoginOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../Redux/Action";
import { useEffect, useRef, useState } from "react";

function NavItem({ item, selectedKey }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Delay before closing
  };

  const handleClick = (e) => {
    if (item.children) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parent link */}
      <Link
        to={item.children ? '#' : item.key}
        className={`nav-link-text ${selectedKey === item.key ? "nav-link-active" : ""}`}
        onClick={handleClick}
      >
        {item.label}
        {item.children && (
          <span className="nav-arrow" style={{ marginLeft: '4px', fontSize: '10px' }}>
            {isOpen ? <UpOutlined /> : <DownOutlined />}
          </span>
        )}
      </Link>

      {/* Submenu */}
      {item.children && item.children.length > 0 && (
        <div
          className={`nav-submenu ${isOpen ? "show" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.children.map((child) => (
            <Link
              key={child.key}
              to={child.key}
              className={`nav-link-text ${selectedKey === child.key ? "nav-link-active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AppNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedKey = location.pathname === "/" ? "/home" : location.pathname;

  const { isLogin, userInfo } = useSelector((state) => state.token);
  const { role, user } = userInfo || {};
  const { name, image, id } = user || {};

  const items = [
    { key: "/Faculty", label: "Faculty", roles: ["admin", "staff", "student"] },
    { key: "/scoreboard", label: "Scoreboard", roles: ["admin", "staff", "student"] },
    {
      key: "/admin",
      label: "Admin",
      roles: ["admin"],
      children: [
        { key: "/AddFaculty", label: "Add Faculty", roles: ["admin"] },
        { key: "/Upload", label: "Upload Faculty", roles: ["admin"] },
        {key: "/test", label: "test", roles: ['admin']}
      ],
    },
  ];

  // Filter menu based on user role
  const filterMenuByRole = (items, userRole) => {
    return items
      .map((item) => {
        if (item.roles && !item.roles.map((r) => r.toLowerCase()).includes(userRole?.toLowerCase())) {
          return null;
        }
        if (item.children) {
          const children = filterMenuByRole(item.children, userRole);
          return children.length ? { ...item, children } : null;
        }
        return item;
      })
      .filter(Boolean)
      .map((item) => ({
        ...item,
        key: item.key || item.label,
        children: item.children?.map((child) => ({
          ...child,
          key: child.key || child.label,
        })),
      }));
  };

  const allowedItems = filterMenuByRole(items, role);

  return (
    <div className="header-sticky">
      <div className="nav-container">
        <nav className="nav-bar">
          <Link to="/Home" className="nav-brand d-flex align-items-center gap-m">
            <AppImage
              name="Website logo"
              className={'rounded-full object-cover'}
              style={{ height: "50px", width: "50px" }}
            />
            <span className="font-bold text-[18px]">My Website</span>
          </Link>

          {/* Navbar links */}
          <div className="nav-links">
            {allowedItems.map((item) => (
              <NavItem key={item.key} item={item} selectedKey={selectedKey} />
            ))}
          </div>

          {/* User info + logout */}
          {isLogin && (
            <div className="d-flex align-items-center gap-2 me-2">
              <AppImage
                data={image?.data}
                name={name}
                className="rounded-circle rounded-full object-cover"
                style={{ height: "50px", width: "50px"}}
              />
              <Link
                to={`/Facultyinfo/${id}`}
                className="font-bold text-[15px] text-decoration-none"
              >
                {name}
              </Link>
              <AppButton
                btnId="logoutBtn"
                aria-label="Logout"
                type="primary"
                className="rounded-lg btn-tall"
                style={{ padding: "12px" }}
                btnOnClick={() => {
                  dispatch(clearToken());
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                <LoginOutlined />
              </AppButton>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

// Separate component for nav item with submenu


// export default NavItem;
