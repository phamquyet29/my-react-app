import React, { useState, useEffect } from "react";
import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const bannerImages = [
  {
    id: 1,
    src: "https://mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=MOFUCM347760&dID=352561&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    alt: "Banner 1",

    description:
      "Hội kiểm toán viên hành nghề Việt Nam tổ chức lễ kỷ niệm 20 năm thành lập",
  },
  {
    id: 2,
    src: "https://mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=MOFUCM347723&dID=352519&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    alt: "Banner 2",

    description:
      "Đoàn làm việc Bộ Tài chính và Bộ Ngoại giao Colombia chụp ảnh lưu niệm",
  },
  {
    id: 3,
    src: "https://mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=MOFUCM347815&dID=352621&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    alt: "Banner 3",
    description:
      "Kết quả của quý I 2025 phản ánh rõ sự nỗ lực và trách nhiệm cao của Bộ Tài Chính",
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div
      className="banner-container"
      style={{ textAlign: "center" }}
    >
      <Carousel
        dotPosition="bottom"
        dots={true}
        effect="fade"
        autoplay
        afterChange={setCurrentSlide}
        activeIndex={currentSlide}
      >
        {bannerImages.map((image) => (
          <div key={image.id} className="banner-slide">
            <Image
              src={image.src}
              alt={image.alt}
              preview={false}
              width="1300px"
              height="500px"
              style={{ objectFit: "cover" }}
            />
            <div className="banner-content">
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom navigation arrows */}
    </div>
  );
};

export default BannerCarousel;
