import { Menu, Image } from "antd";
import {
  HomeOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Trang chủ",
      key: "home",
      icon: <HomeOutlined />,
      onClick: () => navigate("/"),
    },
    {
      label: "Tin tức tài chính",
      key: "news",
      icon: <DollarOutlined />,
      onClick: () => navigate("/tin-tuc-tai-chinh"),
    },
    {
      label: "Hỏi đáp",
      key: "qna",
      icon: <QuestionCircleOutlined />,
      onClick: () => navigate("/hoi-dap"),
    },
  ];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#001529",
        padding: "0px",
      }}
    >
      <Image
        width={200}
        preview={false}
        src="https://mof.gov.vn/theme-service/btc/img/logo.png"
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        style={{ flex: 1, minWidth: 0 ,padding: 10}}
      />
    </header>
  );
}

export default Header;
