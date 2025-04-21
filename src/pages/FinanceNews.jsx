import { useState, useEffect } from "react";
import { List, Skeleton, Divider, Typography, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

function FinanceNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Giả lập API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Dữ liệu mẫu
        setNews([
          {
            id: 1,
            title: "Thị trường chứng khoán tăng điểm mạnh",
            summary:
              "VN-Index tăng 15 điểm trong phiên giao dịch hôm nay nhờ sự hồi phục của nhóm ngân hàng và bất động sản...",
            date: "20/10/2023",
          },
          {
            id: 2,
            title: "Lãi suất ngân hàng có xu hướng giảm",
            summary:
              "Nhiều ngân hàng thương mại đã điều chỉnh giảm lãi suất huy động từ 0.2-0.5%/năm trong tháng này...",
            date: "19/10/2023",
          },
          {
            id: 3,
            title: "Chính phủ công bố gói hỗ trợ lãi suất mới",
            summary:
              "Gói hỗ trợ lãi suất 2% sẽ được áp dụng cho các khoản vay phục vụ sản xuất kinh doanh...",
            date: "18/10/2023",
          },
        ]);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="finance-news">
      <Title level={1}>Tin tức tài chính mới nhất</Title>
      <Divider />

      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={news}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              extra={
                <Button type="primary" shape="round">
                  Đọc tiếp
                </Button>
              }
            >
              <List.Item.Meta
                // title={<a href="#">{item.title}</a>}
                description={
                  <>
                    <ClockCircleOutlined /> {item.date}
                  </>
                }
              />
              {item.summary}
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default FinanceNews;
