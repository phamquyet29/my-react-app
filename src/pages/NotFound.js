import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

function NotFound() {
  return (
    <div className="not-found">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn đang tìm kiếm không tồn tại."
        extra={
          <Link to="/">
            <Button type="primary">Về trang chủ</Button>
          </Link>
        }
      />
    </div>
  );
}

export default NotFound;