import React, { memo } from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import AppNav from "../essential/AppNav";

const MainLayout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <Layout>
      <AppNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content>{children}</Content>
    </Layout>
  );
}

export default memo(MainLayout)
