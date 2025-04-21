import { Card, Row, Col, Typography, Image } from "antd";
import BannerCarousel from "../components/BannerCarousel";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div className="home-page" style={{ paddingTop: "1rem" }}>
      <BannerCarousel style={{ textAlign: "center" }} />
      <Title level={2} style={{ marginTop: "2rem" }}>
        Các tính năng chính:
      </Title>

      <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Tin tức tài chính" bordered={false} style={{lineHeight: 2}}>
            <div>
              <Link to="/">- Tăng cường chỉ đạo thực hiện chính sách BHXH</Link>
            </div>
            <div>
              {" "}
              <Link to="/">
                - Huy động nguồn lực từ hợp tác công - tư để thực hiện các mục
                tiêu cao cả hơn
              </Link>
            </div>
            <div>
              <Link to="/">
                - Bybit sẵn sàng hỗ trợ Việt Nam xây dựng khung pháp lý về tài
                sản mã hóa
              </Link>
            </div>
            <div>
              <Link to="/">
                - Các tổ chức tài chính hàng đầu thế giới chia sẻ kinh nghiệm
                huy động tài chính xanh
              </Link>
            </div>
            <div>
              <Link to="/">
                - Huy động tài chính cho tăng trưởng xanh phù hợp với cấu trúc
                tài chính toàn cầu có ý nghĩa đặc biệt quan trọng
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Thông tin, chỉ đạo điều hành" bordered={false} style={{lineHeight: 2}}>
            <div>
              <Link to="/">
                - Quyết định 1251/QĐ-BTC về việc công bố công khai dự toán ngân
                sách năm 2025 của Bộ Tài chính
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/">
                - Công khai thực hiện dự toán thu, chi ngân sách nhà nước hết
                Năm 2024 của Bộ Tài chính
              </Link>
            </div>
            <div>
              <Link to="/">
                - TTBC số 17 về Hội nghị toàn quốc xin ý kiến về hồ sơ sửa đổi
                toàn diện Luật NSNN
              </Link>
            </div>
            <div>
              <Link to="/">
                - TTBC số 15 về Hội nghị “Xây dựng Trung tâm tài chính tại Việt
                Nam”
              </Link>
            </div>
            <div>
              <Link to="/">
                - TTBC số 14 về kết quả Hội nghị “Quỹ đầu tư và đầu tư nước
                ngoài trong kỷ nguyên phát triển mới của Việt Nam”
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Bộ tài chính với doanh nghiệp" bordered={false} style={{lineHeight: 2}}>
            <div>
              <Link to="/">
                - Quyết định số 1345 /QĐ-BTC về việc thu hồi giấy chứng nhận đủ
                điều kiện kinh doanh dịch vụ thẩm định giá
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/">
                - Quyết định số 1153 /QĐ-BTC về việc đình chỉ kinh doanh dịch vụ
                thẩm định giá
              </Link>
            </div>
            <div>
              <Link to="/">
                - Văn phòng Bộ Tài chính mời báo giá cung cấp dịch vụ internet
                wifi tại trụ sở số 6-8 Phan Huy Chú
              </Link>
            </div>
            <div>
              <Link to="/">
                - Cục Hải quan (Bộ Tài chính) mời quan tâm, báo giá giày da đen,
                thắt lưng, cravat hải quan năm 2025
              </Link>
            </div>
            <div>
              <Link to="/">
                - Cục Hải quan (Bộ Tài chính) thông báo kế hoạch LCNT Mua sắm
                máy soi hành lý và máy soi hàng hóa cho hải quan
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
