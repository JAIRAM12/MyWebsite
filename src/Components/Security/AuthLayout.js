import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function AuthLayout({ children }) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
