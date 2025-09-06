import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import AppNav from "../essential/AppNav";

export default function MainLayout({ children, darkMode, toggleDarkMode }) {
  return (
    <Layout>
      <AppNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content>{children}</Content>
    </Layout>
  );
}
