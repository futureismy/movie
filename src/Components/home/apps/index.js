import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Apps() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <section id="app">
      <div className="app_list">
        <div className="row mx-0">
          <div className="col-lg-6 col-12 app_info">
            <p className="text">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className="textSmall">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a className="dowload">App miễn phí - Tải về ngay!</a>
            <p className="textUnder">
              TIX có hai phiên bản&nbsp;
              <a href="#">iOS</a>
              &amp;&nbsp;
              <a href="#">Android</a>
            </p>
          </div>
          <div className="col-lg-6 col-12 app_img">
            <img
              className="img-res"
              src="https://tix.vn/app/assets/img/icons/mobile.png"
              alt
            />
            <div className="owl-app">
              <Slider {...settings}>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide16.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide2.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide3.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/slide/slide4.jpg"
                    alt
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
