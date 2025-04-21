import { Layout, Space, Divider, Typography } from "antd";
import {
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

export default function Footer() {
  return (
    <AntFooter
      style={{
        background: "#001529",
        padding: "24px 50px",
        textAlign: "center",
        marginTop: "auto", // Đẩy footer xuống dưới cùng
      }}
    >
      <Space direction="vertical" size="middle">
        {/* Social Links */}
        <Space size="large">
          <Link href="#" target="_blank">
            <YoutubeOutlined style={{ fontSize: "24px" }} />
          </Link>
          <Link href="#" target="_blank">
            <TwitterOutlined style={{ fontSize: "24px" }} />
          </Link>
          <Link href="#" target="_blank">
            <FacebookOutlined style={{ fontSize: "24px" }} />
          </Link>
          <Link href="#" target="_blank">
            <InstagramOutlined style={{ fontSize: "24px" }} />
          </Link>
        </Space>

        {/* Navigation Links */}
        <Space size="large">
          <Link href="/">Trang chủ</Link>
          <Link href="/tin-tuc-tai-chinh">Tin tức</Link>
          <Link href="/hoi-dap">Hỏi đáp</Link>
          <Link href="#">Liên hệ</Link>
          <Link href="#">Điều khoản</Link>
        </Space>

        <Divider style={{ margin: "16px 0" }} />

        {/* Copyright */}
        <Text type="secondary" style={{ color: "white" }}>
          © {new Date().getFullYear()} Tài Chính Cá Nhân. All Rights Reserved.
        </Text>
      </Space>
    </AntFooter>
  );
}
