import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import "./Footer.css"; // Nhớ import CSS
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function LayoutWrapper({ children }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet /> {/* Thay thế children bằng Outlet */}
      <Footer />
    </Layout>
  );
}
