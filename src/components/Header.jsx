import { Menu, Image, Input } from "antd";
import { AudioOutlined, HomeOutlined, WechatOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
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
  const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#001529",
      }}
    >
      <Image width={100} preview={false} src="../logo.png" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        style={{ flex: 1, minWidth: 0, padding: 10 }}
      />
      <div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </div>
    </header>
  );
}

export default Header;
