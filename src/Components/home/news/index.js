import React from "react";

export default function News() {
  return (
    <div id="news">
      {/* Nav pills */}
      <ul className="nav nav-pills justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#home">
            Điện Ảnh 24h
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#menu1">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#menu2">
            Khuyến Mãi
          </a>
        </li>
      </ul>
      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="home">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                      alt
                    />
                    <p className="newTitle mt-2">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                  độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương
                  tại 360 Giải Phóng!{" "}
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu{" "}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc
                  bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi
                  sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong
                  một khung hình để ăn mừng thành tích ấn tượng của tác phẩm.{" "}
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                      alt
                    />
                    <p className="newTitle mt-2">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN{" "}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
                  thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng
                  VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                      Antebellum: Bẫy Thực Tại Kinh Hoàng{" "}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                  mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự
                  tham gia của nhà sản xuất đã làm nên thành công của loạt tác
                  phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn
                  nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                        đầu doanh tại Hàn Quốc mùa dịch
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                        alt
                      />
                      <span className="newTitle">
                        Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                        Christopher Nolan
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                        đầu doanh tại Hàn Quốc mùa dịch
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                        đình đám nhất Hollywood
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <button>XEM THÊM</button> */}
        </div>
        <div className="tab-pane container fade" id="menu1">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                      kết
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      Review: Dinh Thự Oan Khuất (Ghost Of War)
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                  Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      American Sniper - Chính nghĩa hay phi nghĩa?
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        Review: Spider-Man: Into The Spider-Vesre{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                        alt
                      />
                      <span className="newTitle">
                        COVID-19 là bản chính thức của MEV-1 phim contagion
                        (2011)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                        giờ lầy lội và hài hước đến thế
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                        hùng Valiant
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <button>XEM THÊM</button> */}
        </div>
        <div className="tab-pane container fade" id="menu2">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/bhd-59k-ve-ca-tuan-16045659414321.jpg"
                      alt
                    />
                    <p className="newTitle mt-2">BHD 59K/VÉ CẢ TUẦN !!!</p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="new_item mb-4">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                      alt
                    />
                    <p className="newTitle mt-2">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                  voucher thanh toán ZaloPay thả ga
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                      alt
                    />
                    <p className="newTitle mt-2">
                      ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX{" "}
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                  chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <div>
                  <a href="#">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                      alt
                    />
                    <p className="newTitle mt-2">
                      BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                    </p>
                  </a>
                </div>
                <p className="newsDescription ">
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                  Vé Phim trên ZaloPay.
                </p>
                <div className="iconFacebook d-flex">
                  <div className="wrap-icon like">
                    <img
                      src="https://tix.vn/app/assets/img/icons/like.png"
                      alt
                    />
                    <span>1</span>
                  </div>
                  <div className="wrap-icon comment">
                    <img
                      src="https://tix.vn/app/assets/img/icons/comment.png"
                      alt
                    />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="new_item">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                        alt
                      />
                      <span className="newTitle">
                        [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé
                        Anh Trai Yêu Quái
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                        alt
                      />
                      <span className="newTitle">
                        [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé
                        Pháp Sư Mù: Ai Chết Giơ Tay
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                        alt
                      />
                      <span className="newTitle">
                        {" "}
                        [Mega GS] Một đoá hoa thay ngàn lời yêu
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <button>XEM THÊM</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
