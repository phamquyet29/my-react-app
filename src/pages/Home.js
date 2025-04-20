import { Card, Row, Col, Typography } from 'antd';
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div className="home-page">
      <Title level={1}>Chào mừng đến với trang tài chính cá nhân</Title>
      <Paragraph>Nơi cung cấp thông tin tài chính hữu ích và giải đáp mọi thắc mắc</Paragraph>
      
      <Title level={2} style={{ marginTop: '2rem' }}>Các tính năng chính:</Title>
      
      <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Tin tức tài chính" bordered={false}>
            Cập nhật tin tức tài chính mới nhất từ các nguồn đáng tin cậy
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Hỏi đáp chuyên gia" bordered={false}>
            Đặt câu hỏi và nhận tư vấn từ các chuyên gia tài chính
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Công cụ tính toán" bordered={false}>
            Các công cụ hỗ trợ tính toán tài chính cá nhân
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;