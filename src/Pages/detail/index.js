import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import format from "date-format";
import {getMovieDetailAPI} from '../../Redux/action/movie.action'
import {getCinemaAPI,getShowTimeCinemAPI} from '../../Redux/action/cinema.action'

export default function Detail() {
  const dispatch = useDispatch();
  const { maPhim } = useParams();
  const [state, setstate] = useState({
    maHeThongRap: "BHDStar",
  });
 
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);
  console.log('movei' + movieDetail)  
  const listCalendarCinema = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );
  console.log(movieDetail)
  const listCinema = useSelector((state) => state.cinemaReducer.listCinema);
  console.log('ga',listCinema)
  useEffect(()=>{
    dispatch(getMovieDetailAPI(maPhim));
    dispatch(getCinemaAPI());
    dispatch(getShowTimeCinemAPI(state.maHeThongRap))
  })
  function renderCinema() {
    return listCinema?.map((cinema, index) => {
      const { tenHeThongRap, logo } = cinema;
      let opacity = {};
      if (cinema.maHeThongRap == state.maHeThongRap) {
        opacity = { opacity: 1 };
      }
      return (
        <li key={index}>
          <a>
            <img
              style={opacity}
              onClick={() => setstate({ maHeThongRap: cinema.maHeThongRap })}
              src={logo}
              alt="cinema1" />
          </a>
          <span>{tenHeThongRap}</span>
        </li>
      );
    });
  }

  const renderCalendarCinema = () => {
    return listCalendarCinema?.map((cinema, index) => {
      const { tenHeThongRap, mahom } = cinema;
      console.log('he thong' ,cinema);
      return cinema.lstCumRap?.map((cumRap, index) => {
        const { tenCumRap, diaChi } = cumRap;
        console.log(cumRap.tenCumRap, cumRap.diaChi);
        console.log('danh sach phim' ,cumRap.danhSachPhim)
        return cumRap.danhSachPhim
          ?.filter((movies) => movies.maPhim == maPhim)
          .map((movie, index) => {
            console.log(movie.tenPhim);
            return (
              <div key={index} className="wrapMovie">
                <div className="wrapInfo d-flex align-items-center">
                  <div className="info">
                    <span>{tenCumRap}</span>
                    <p className="mt-1">{diaChi}</p>
                  </div>
                </div>
                <div className="wrapSession">
                  <div className="listTypeTime">
                    <h4>2D Digital</h4>
                    {movie.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                      const { ngayChieuGioChieu, maLichChieu } = lichChieu;
                      const user = JSON.parse(
                        localStorage.getItem("userLogin")
                      );
                      if (user) {
                        return (
                          <NavLink to={`/booking/${maLichChieu}`}>
                            <span key={index}>
                              {format(
                                "dd-MM-yyy | hh:mm",
                                new Date(ngayChieuGioChieu)
                              )}
                            </span>
                          </NavLink>
                        );
                      } else {
                        return (
                          <NavLink to={`/signIn`}>
                            <span key={index}>
                              {format(
                                "dd-MM-yyy | hh:mm",
                                new Date(ngayChieuGioChieu)
                              )}
                            </span>
                          </NavLink>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          });
      });
    });
  };

  return (
    <>
      <div
        style={{ marginTop: "60px" }}
        id="detailMainTop"
        className="backgroundMain"
      >
        <div className="styleBlur">
          <img
            style={{ width: "100%", height: "100vh" }}
            src={movieDetail.hinhAnh}
            className="posterLandscapeFilm"
          />
        </div>
        <div class="styleGradient"></div>
        <div className="detailMainInfo row">
          <div className="col-3 filmPosterTop">
            <div className="posterMain">
              <img className = 'imgDetail' src={movieDetail.hinhAnh}/>
              <button className="playTrailerDetail">
                <img src="http://tix.vn/app/assets/img/icons/play-video.png" />
              </button>
            </div>
          </div>
          <div className="col-5 infoMain">
            <div>
              <span class="detailMainInfo1 ng-binding">
                {format("dd-MM-yyy", new Date(movieDetail.ngayKhoiChieu))}
              </span>
              <br />
            </div>

            <div className="parentInfo2">
              <span className="detailMainInfo2">
                <span className="ageType">C18</span>
                <span className="ng-binding">{movieDetail.tenPhim}</span>
              </span>
            </div>

            <div>
              <span className="detailMainInfo1 ng-binding">
                100 phút - 0 IMDb - 2D/Digital
              </span>
              <br />
            </div>
            {movieDetail.maNhom == "GP09" ? (
              ""
            ) : (
              <button className="btnBuyTicketDetail">Mua vé</button>
            )}
          </div>
          <div className="col-2 circleStar">
            <div className="circleSum"></div>
            <div id="circlePercent" className="c100 p74">
              <div className="circleBorder"></div>
              <span className="ng-binding">{movieDetail.danhGia}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div id="starMain" className="star">
              <img
                className="smallStar"
                src="http://tix.vn/app/assets/img/icons/star1.png"
              />
              <img
                className="smallStar"
                src="http://tix.vn/app/assets/img/icons/star1.png"
              />
              <img
                className="smallStar"
                src="http://tix.vn/app/assets/img/icons/star1.png"
              />
              <img
                className="half"
                src="http://tix.vn/app/assets/img/icons/star1.2.png"
                style={{ width: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="cinemaComplex">
        <h2
          style={{ color: "#fb4226", fontWeight: "600" }}
          className="text-center mb-5"
        >
          Lịch chiếu
        </h2>
        <div className="row">
          <div className="col-4">
            <ul className="listCinemas">{renderCinema()}</ul>
          </div>
          <div className="col-8">
            <div className="listMovies">{renderCalendarCinema()}</div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
