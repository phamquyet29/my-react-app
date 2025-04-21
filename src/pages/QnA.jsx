import React, { useState } from "react";
import { FileTextOutlined, SendOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Collapse,
  Typography,
  message,
  Menu,
  Switch,
  Card,
  Spin,
} from "antd";
import axios from "axios";

const { TextArea } = Input;
const { Panel } = Collapse;
const { Title, Text } = Typography;
const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://api.deepseek.com/v1/chat/completions";
const API_KEY = process.env.REACT_APP_API_KEY;

const menuItems = [
  {
    key: "sub1",
    label: "Tài chính tổng hợp",

    children: Array.from({ length: 4 }, (_, i) => ({
      key: `1-${i}`,
      label: `Option ${i + 1}`,
    })),
  },
  {
    key: "sub2",
    label: "Kế hoạch - Tài chính",
    children: [
      ...Array.from({ length: 2 }, (_, i) => ({
        key: `2-${i}`,
        label: `Option ${i + 5}`,
      })),
      {
        key: "sub3",
        label: "Thuế",
        children: Array.from({ length: 2 }, (_, i) => ({
          key: `3-${i}`,
          label: `Option ${i + 7}`,
        })),
      },
    ],
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    key: `sub${i + 4}`,
    label: [
      "Hải quan",
      "Kế toán và kiểm toán",
      "Tài chính kinh tế ngành",
      "Ngân sách nhà nước",
      "Quản lý công sản",
      "Kho bạc",
      "Quản lý nợ",
      "Kinh tế đối ngoại",
    ][i],
    children: Array.from({ length: 4 }, (_, j) => ({
      key: `${i + 4}-${j}`,
      label: `Option ${j + 9}`,
    })),
  })),
];

const QnA = () => {
  const [theme, setTheme] = useState("dark");
  const [currentMenu, setCurrentMenu] = useState("1-0");
  const [chatMessages, setChatMessages] = useState([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Làm thế nào để đầu tư chứng khoán hiệu quả?",
      answer: `1. Tìm hiểu kiến thức cơ bản\n2. Xác định mục tiêu đầu tư\n3. Phân bổ vốn hợp lý\n4. Theo dõi thị trường thường xuyên`,
    },
    {
      id: 2,
      question: "Nên gửi tiết kiệm ngân hàng nào?",
      answer: `- Lãi suất cạnh tranh\n- Uy tín và độ an toàn\n- Dịch vụ khách hàng\n- Tiện ích đi kèm`,
    },
  ]);
  const [form] = Form.useForm();

  const changeTheme = (value) => setTheme(value ? "dark" : "light");

  const handleMenuClick = (e) => {
    console.log("Menu clicked: ", e);
    setCurrentMenu(e.key);
  };

  const callAIApi = async (question) => {
    setIsChatLoading(true);
    try {
      const response = await axios.post(
        API_URL,
        {
          model: "deepseek-chat",
          messages: [
            ...chatMessages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: "user", content: question },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("API Error:", error);
      throw error.response?.data?.error?.message || "Lỗi khi kết nối với AI";
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    try {
      const aiResponse = await callAIApi(chatInput);
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      message.error(error);
      // Rollback the user message if API fails
      setChatMessages((prev) =>
        prev.filter((msg) => msg.content !== chatInput)
      );
    }
  };

  const handleQuestionSubmit = (values) => {
    const newQuestion = {
      id: questions.length + 1,
      question: values.question,
      answer:
        "Câu hỏi của bạn đang được chuyên gia giải đáp. Vui lòng quay lại sau!",
    };
    setQuestions([...questions, newQuestion]);
    form.resetFields();
    message.success("Câu hỏi đã được gửi thành công!");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#141414" : "#f5f5f5",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Sidebar Menu */}
      <div style={{ width: "250px", flexShrink: 0 }}>
        <Card
          loading={false}
          style={{
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Text
              strong
              style={{ color: theme === "dark" ? "#1F1F1F" : "#d9d9d9" }}
            >
              Danh mục
            </Text>
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              style={{ background: theme === "dark" ? "#1890ff" : "#d9d9d9" }}
            />
          </div>
          <Menu
            theme={theme}
            onClick={handleMenuClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[currentMenu]}
            mode="inline"
            items={menuItems}
            style={{ borderRight: 0 }}
          />
        </Card>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", gap: "20px" }}>
        {/* Question Form Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Card
            title="Đặt câu hỏi"
            loading={false}
            style={{
              flex: 1,
            }}
          >
            <Form form={form} layout="vertical" onFinish={handleQuestionSubmit}>
              <Form.Item
                name="question"
                rules={[{ required: true, message: "Vui lòng nhập câu hỏi" }]}
              >
                <TextArea
                  rows={4}
                  placeholder="Nhập câu hỏi của bạn về tài chính..."
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                >
                  Gửi câu hỏi
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card
            title="Câu hỏi thường gặp"
            loading={false}
            style={{
              flex: 1,
            }}
          >
            <Collapse
              accordion
              items={[
                {
                  key: "1",
                  label: "Câu hỏi 1",
                  children: (
                    <div style={{ padding: 12 }}>Nội dung trả lời 1</div>
                  ),
                },
                {
                  key: "2",
                  label: "Câu hỏi 2",
                  children: (
                    <div style={{ padding: 12 }}>Nội dung trả lời 2</div>
                  ),
                },
              ]}
            />
          </Card>
        </div>

        {/* AI Chat Section */}
        <Card
          title="Trợ lý AI Tài chính"
          loading={false}
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "16px",
              padding: "12px",
              borderRadius: "4px",
              background: theme === "dark" ? "#141414" : "#f5f5f5",
            }}
          >
            {chatMessages.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  color: theme === "dark" ? "#8c8c8c" : "#bfbfbf",
                  padding: "24px",
                }}
              >
                {API_KEY
                  ? "Hãy đặt câu hỏi về tài chính"
                  : "Vui lòng cấu hình API key"}
              </div>
            ) : (
              chatMessages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "12px",
                    textAlign: msg.role === "user" ? "right" : "left",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius:
                        msg.role === "user"
                          ? "12px 12px 0 12px"
                          : "12px 12px 12px 0",
                      background:
                        msg.role === "user"
                          ? "#1890ff"
                          : theme === "dark"
                          ? "#2a2a2a"
                          : "#e6f7ff",
                      color: msg.role === "user" ? "#fff" : "inherit",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            {isChatLoading && (
              <div style={{ textAlign: "left", padding: "8px 12px" }}>
                <Spin size="small" style={{ marginRight: "8px" }} />
                <Text type="secondary">AI đang trả lời...</Text>
              </div>
            )}
          </div>

          <form onSubmit={handleChatSubmit}>
            <TextArea
              rows={3}
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Nhập câu hỏi về tài chính..."
              disabled={isChatLoading || !API_KEY}
              style={{
                marginBottom: "8px",
              }}
            />
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              loading={isChatLoading}
              disabled={!API_KEY}
              block
            >
              {API_KEY ? "Gửi câu hỏi" : "Vui lòng cấu hình API"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default QnA;
