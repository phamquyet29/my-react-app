import { Menu, Image, Input } from "antd";
import {
  AudioOutlined,
  HomeOutlined,
  WechatOutlined,
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
      label: "Chat với AI",
      key: "chat",
      icon: <WechatOutlined />,
      onClick: () => navigate("/"),
    },
    {
      label: "Hỏi đáp",
      key: "qna",
      icon: <QuestionCircleOutlined />,
      onClick: () => navigate("/"),
    },
  ];

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch = (value) => {
    console.log("Tìm kiếm:", value);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        backgroundColor: "#001529",
        height: 64,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Image width={100} preview={false} src="/logo.png" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={items}
          style={{
            backgroundColor: "transparent",
            borderBottom: "none",
            flex: 1,
            fontSize: 16,
          }}
        />
      </div>

      {/* <div>
        <Search
          placeholder="Tìm kiếm..."
          allowClear
          enterButton="Tìm"
          size="middle"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: 280, borderRadius: 8 }}
        />
      </div> */}
    </header>
  );
}

export default Header;
