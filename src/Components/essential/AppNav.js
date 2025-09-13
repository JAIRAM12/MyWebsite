import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import store from "../Redux/store";
import AppImage from "./AppImage";
import AppButton from "./AppButton";
import {LoginOutlined} from '@ant-design/icons'; 
import { useDispatch } from "react-redux";
import { clearToken } from "../Redux/Action";
// import { clearToken } from "../Redux/reducer";

const { Header } = Layout;

export default function AppNav({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKey = location.pathname === "/" ? "/home" : location.pathname;
  const state = store.getState();
  const dispatch = useDispatch()

  const items = [
    { key: '/faculty', label: 'Faculty' },
    { key: '/scoreboard', label: 'Scoreboard' },
    {
      key: '/admin',
      label: 'Admin',
      children: [
        { key: '/AddFaculty', label: 'Add Faculty' },
        { key: '/ManageFaculty', label: 'Manage Faculty' }
      ]
    },
    { key: '/upload', label: 'Upload' }
  ];

  return (
    <Header
      className={`d-flex align-items-center  bg-white text-black dark:bg-gray-800 dark:text-white`}
      style={{ height: "80px", lineHeight: "80px", padding: "0 20px"}}
    >
      {/* Logo + Site Name */}
      <div className="d-flex align-items-center mr-2">
        <AppImage
          name="Website logo"
          style={{ height: "50px", borderRadius: "50%", objectFit: "cover" }}
        />
        <span className="fw-bold ml-2">My Website</span>
      </div>

      {/* Menu + Toggle */}
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          // theme={"light"}
          style={{ flex: 1, justifyContent: "flex-end" }}
          onClick={({ key }) => navigate(key)}
        />
        <div className="d-flex align-items-center mr-2">
          <AppImage
            data={state.token.image}
            name={state.token.userName}
            style={{ height: "50px", borderRadius: "50%", width: "50px", objectFit: "cover" }}
          />
          <Link to={'/Facultyinfo/' + state.token.userId} className="fw-bold ml-2 text-decoration-none" >{state.token.userName}</Link>
        </div>
        <div className="d-flex align-items-center mr-2" >
          <AppButton type='primary' style={{ padding: '1px'}} icon={<LoginOutlined />} onClick={() => dispatch(clearToken())} />
        </div>
      </div>
    </Header>
  );
}
