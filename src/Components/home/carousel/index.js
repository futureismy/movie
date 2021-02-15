import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieHomeToolAPI,
  getCinemaHomeToolAPI,
} from "../../../Redux/action/homeTool.action";
import format from "date-format";
import {NavLink} from "react-router-dom"


export default function Carousel() {
  const user = JSON.parse(localStorage.getItem("userLogin"))
  const [state, setstate] = useState({ maPhim: "", tenPhim: "" });
  const [cumRap, setCumRap] = useState({ cumRap: "" });
  const [ngayChieuGioChieu, setNgayChieuGioChieu] = useState({
    ngayChieuGioChieu: "", maLichChieu:""
  });
  const listCinema = useSelector((state) => state.homeToolReducer.listCinema);
  const dispatch = useDispatch()
  useEffect(()=>{
  
    dispatch(getMovieHomeToolAPI())
  })
  console.log(state.maPhim)
  const listMovie = useSelector((state) => state.homeToolReducer.listMovie);
  useEffect(()=>{
    dispatch(getCinemaHomeToolAPI(state.maPhim))
  },[])
  const renderMovie = () => {
    return listMovie.map((movie, index) => {
      console.log('datalist ' + listMovie)
      return (
        <a
          key={index}
          onClick={() => {
            setstate({
              maPhim: movie.maPhim,
              tenPhim: movie.tenPhim,
            });
          }}
          className="dropdown-item"
        >
          {movie.tenPhim}
        </a>
        
      );
    });
  };

  const renderCinema = () => {
    return listCinema.heThongRapChieu?.map((rap, index) => {
      return rap.cumRapChieu.map((cumRap, index) => {
        return (
          <a
            onClick={() =>
              setCumRap({
                cumRap: cumRap.tenCumRap,
              })
            }
            class="dropdown-item"
          >
            {cumRap.tenCumRap}
          </a>
        );
      });
    });
  };

  const renderScreenings = () => {
    return listCinema.heThongRapChieu?.map((rap, index) => {
      return rap.cumRapChieu
        .filter((item) => item.tenCumRap === cumRap.cumRap)
        .map((cumRap, index) => {
          return cumRap.lichChieuPhim.map((lichChieuPhim, index) => {
            return (
              <a
                onClick={() =>
                  setNgayChieuGioChieu({
                    ngayChieuGioChieu: format(
                      "dd/MM/yyy | hh:mm",
                      new Date(lichChieuPhim.ngayChieuGioChieu)
                    ),
                    maLichChieu:lichChieuPhim.maLichChieu
                  })
                }
                className="dropdown-item"
              >
                {format(
                  "dd/MM/yyy | hh:mm",
                  new Date(lichChieuPhim.ngayChieuGioChieu)
                )}
              </a>
            );
          });
        });
    });
  };

  const settings = {
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="carousel">
      <Slider {...settings}>
        <div className="item">
          <a href="#">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png"
              alt="{4}"
            />
          </a>
          <div className="backgroundLinear">
            <div className="play">
              <a
                className="venobox"
                data-vbtype="video"
                href="https://www.youtube.com/embed/Vgb1uUmpQNU?autoplay=1"
              >
                <img
                  src="http://tix.vn/app/assets/img/icons/play-video.png"
                  alt="video1"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <a href="#">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/11/bi-mat-cua-gio-sneakshow-16056745070206.jpg"
              alt="{2}"
            />
          </a>
          <div className="backgroundLinear" />
          <div className="play">
            <a
              className="venobox"
              data-vbtype="video"
              href="https://www.youtube.com/embed/Vgb1uUmpQNU?autoplay=1"
            >
              <img
                src="http://tix.vn/app/assets/img/icons/play-video.png"
                alt="video1"
              />
            </a>
          </div>
        </div>
        <div className="item">
          <a href="#">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/12/chi-13-16088073540614.png"
              alt="{2}"
            />
          </a>
          <div className="backgroundLinear" />
          <div className="play">
            <a
              className="venobox"
              data-vbtype="video"
              href="https://www.youtube.com/embed/Vgb1uUmpQNU?autoplay=1"
            >
              <img
                src="http://tix.vn/app/assets/img/icons/play-video.png"
                alt="video1"
              />
            </a>
          </div>
        </div>
      </Slider>
      <div className="homeTools d-flex">
        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle "
            data-toggle="dropdown"
          >
            {state.tenPhim === "" ? "Phim" : state.tenPhim}
          </button>
          <div className="dropdown-menu">{renderMovie()}</div>
        </div>
        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle "
            data-toggle="dropdown"
          >
            {cumRap.cumRap === "" ? "Rạp" : cumRap.cumRap}
          </button>
          <div className="dropdown-menu">
          <a className="dropdown-item">Chọn rạp</a>
          {renderCinema()}</div>
        </div>
        <div className="dropdown d-flex">
          <button
            type="button"
            className=" dropdown-toggle"
            data-toggle="dropdown"
          >
            {ngayChieuGioChieu.ngayChieuGioChieu === ""
              ? "Ngày chiếu - Giờ chiếu"
              : ngayChieuGioChieu.ngayChieuGioChieu}
          </button>
          <div className="dropdown-menu">
          <a className="dropdown-item">Chọn ngày chiếu - giờ chiếu</a>
          {renderScreenings()}</div>
        </div>
        <div className="dropdown d-flex justify-content-center">
          {state.maPhim !== "" &&
          state.tenPhim !== "" &&
          cumRap.cumRap !== "" &&
          ngayChieuGioChieu.ngayChieuGioChieu !== ""? (
            user?
            <NavLink to={`/booking/${ngayChieuGioChieu.maLichChieu}`}>
            <button style={{backgroundColor:"#fb4226"}} type="button" className="btn">
              Mua vé ngay
            </button>
            </NavLink>:
            <NavLink to="/signIn">
            <button style={{backgroundColor:"#fb4226"}} type="button" className="btn">
              Mua vé ngay
            </button>
            </NavLink>
          ) : (
            <button type="button" className="btn btn-dark">
              Mua vé ngay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
