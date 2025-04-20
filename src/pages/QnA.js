import { useState } from 'react';
import { Form, Input, Button, Collapse, Typography, message } from 'antd';
const { TextArea } = Input;
const { Panel } = Collapse;
const { Title } = Typography;

function QnA() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Làm thế nào để đầu tư chứng khoán hiệu quả?",
      answer: "Đầu tư chứng khoán hiệu quả cần có chiến lược rõ ràng, đa dạng hóa danh mục và kiên nhẫn. Bạn nên:\n1. Tìm hiểu kiến thức cơ bản\n2. Xác định mục tiêu đầu tư\n3. Phân bổ vốn hợp lý\n4. Theo dõi thị trường thường xuyên"
    },
    {
      id: 2,
      question: "Nên gửi tiết kiệm ngân hàng nào?",
      answer: "Bạn nên so sánh lãi suất giữa các ngân hàng và xem xét uy tín của ngân hàng đó. Một số tiêu chí lựa chọn:\n- Lãi suất cạnh tranh\n- Uy tín và độ an toàn\n- Dịch vụ khách hàng\n- Tiện ích đi kèm"
    }
  ]);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newQ = {
      id: questions.length + 1,
      question: values.question,
      answer: "Câu hỏi của bạn đang được chuyên gia giải đáp. Vui lòng quay lại sau!"
    };
    setQuestions([...questions, newQ]);
    form.resetFields();
    message.success('Câu hỏi của bạn đã được gửi thành công!');
  };

  return (
    <div className="qna-page">
      <Title level={1}>Hỏi đáp tài chính</Title>
      
      <section className="ask-question" style={{ marginBottom: '2rem' }}>
        <Title level={3}>Đặt câu hỏi</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="question"
            label="Câu hỏi của bạn"
            rules={[{ required: true, message: 'Vui lòng nhập câu hỏi' }]}
          >
            <TextArea rows={4} placeholder="Nhập câu hỏi của bạn về tài chính..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi câu hỏi
            </Button>
          </Form.Item>
        </Form>
      </section>
      
      <section className="question-list">
        <Title level={3}>Câu hỏi thường gặp</Title>
        <Collapse accordion>
          {questions.map(q => (
            <Panel header={q.question} key={q.id}>
              <p style={{ whiteSpace: 'pre-line' }}>{q.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </section>
    </div>
  );
}

export default QnA;