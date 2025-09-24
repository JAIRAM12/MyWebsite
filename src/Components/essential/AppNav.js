import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppImage from "./AppImage";
import AppButton from "./AppButton";
import { LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../Redux/Action";

const { Header } = Layout;

// 🔹 Recursive filter function for menu items
const filterMenuByRole = (items, userRole) => {
  return items
    .map((item) => {
      if (
        item.roles &&
        !item.roles.map((r) => r.toLowerCase()).includes(userRole?.toLowerCase())
      ) {
        return null;
      }
      if (item.children) {
        const children = filterMenuByRole(item.children, userRole);
        return children.length ? { ...item, children } : null;
      }
      return item;
    })
    .filter(Boolean);
};

export default function AppNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = location.pathname === "/" ? "/home" : location.pathname;

  const { isLogin, userInfo } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const { role, user } = userInfo || {};
  const { name, image, id } = user || {};

  const items = [
    { key: "/faculty", label: "Faculty", roles: ["admin", "staff", "student"] },
    { key: "/scoreboard", label: "Scoreboard", roles: ["admin", "staff", "student"] },
    {
      key: "/admin",
      label: "Admin",
      roles: ["admin"],
      children: [
        { key: "/AddFaculty", label: "Add Faculty", roles: ["admin"] },
        // { key: "/ManageFaculty", label: "Manage Faculty", roles: ["admin"] },
      ],
    },
    { key: "/upload", label: "Upload", roles: ["staff", "admin"] },
  ];

  const allowedItems = filterMenuByRole(items, role);

  return (
    <Header
      className="d-flex align-items-center bg-white text-black dark:bg-gray-800 dark:text-white"
      style={{ height: "80px", lineHeight: "80px", padding: "0 20px" }}
    >
      {/* 🔹 Logo */}
      <div className="d-flex align-items-center mr-2">
        <AppImage
          name="Website logo"
          style={{ height: "50px", borderRadius: "50%", objectFit: "cover" }}
        />
        <span className="fw-bold ml-2">My Website</span>
      </div>

      {/* 🔹 Menu */}
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={allowedItems}
          style={{ flex: 1, justifyContent: "flex-end" }}
          onClick={({ key }) => navigate(key)}
        />

        {/* 🔹 Profile (only if logged in) */}
        {isLogin && (
          <div className="d-flex align-items-center mr-2">
            <AppImage
              data={image?.data}
              name={name}
              style={{
                height: "50px",
                borderRadius: "50%",
                width: "50px",
                objectFit: "cover",
              }}
            />
            <Link
              to={"/Facultyinfo/" + id}
              className="fw-bold ml-2 text-decoration-none"
            >
              {name}
            </Link>
          </div>
        )}

        {/* 🔹 Logout button */}
        {isLogin && (
          <div className="d-flex align-items-center mr-2">
            <AppButton
              type="primary"
              style={{ padding: "1px" }}
              icon={<LoginOutlined />}
              onClick={() => {
                dispatch(clearToken());
                localStorage.removeItem("token");
                navigate("/");
              }}
            />
          </div>
        )}
      </div>
    </Header>
  );
}
