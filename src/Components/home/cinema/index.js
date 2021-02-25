import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaAPI,
  getCinemaSystemAPI,
  getShowTimeCinemAPI,
} from "../../../Redux/action/cinema.action";
import format from "date-format";
import Slider from "react-slick";
export default function Cinema() {
  const [maHeThongRap, setMaHeThongRap] = useState({ ma: "BHDStar" });
  const [maCum, setMaCumRap] = useState({
    ma: "",
  });

  const dispatch = useDispatch();

  const cinema = useSelector((state) => state.cinemaReducer.listCinema);
  const cinemaSystem = useSelector(
    (state) => state.cinemaReducer.listCinemaSystem
  );
  const showTimeCienma = useSelector(
    (state) => state.cinemaReducer.listShowTimeCinema
  );

  useEffect(() => {
    
    dispatch(getCinemaAPI());
  }, []);
  useEffect(()=>{
    dispatch(getCinemaSystemAPI(maHeThongRap.ma))
  },[])

  useEffect(()=>{
    dispatch(getShowTimeCinemAPI(maHeThongRap.ma))
  },[])


  const renderCinema = () => {
 
    return cinema?.map((cinema, index) => {
      let opacity = {};
      if (cinema.maHeThongRap == maHeThongRap.ma) {
        opacity = { opacity: 1 };
      }
      return (
        <li key={index}>
          <a>
            <img
              style={opacity}
              onClick={() =>
                setMaHeThongRap({
                  ma: cinema.maHeThongRap,
                })
              }
              src={cinema.logo}
              alt={cinema.biDanh}
            />
          </a>
        </li>
      );
    });
  };

  const renderCinemaSystem = () => {
  
    return cinemaSystem?.map((cinemaSystem, index) => {
      let opacity = {};
      if (maCum.ma == cinemaSystem.maCumRap) {
        opacity = { opacity: 1 };
      }
      return (
        <div
          style={opacity}
          key={index}
          className="cinema_item d-flex"
          onClick={() =>
            setMaCumRap({
              ma: cinemaSystem.maCumRap,
            })
          }
        >
          <div className="cinema_info">
            <h4>{cinemaSystem.tenCumRap}</h4>
            <p className="mb-1">{cinemaSystem.diaChi}</p>
            <p>
              <a href="#">[chi tiết]</a>
            </p>
          </div>
        </div>
      );
    });
  };

  const renderShowTimeCinema = () => {
   
    return showTimeCienma?.map((time, index) => {
     
      return time.lstCumRap
        .filter((item) => item.maCumRap === maCum.ma)
        .map((listCumRap, index) => {
          console.log(listCumRap.maCumRap)
          console.log(maCum.ma)
          console.log(listCumRap.danhSachPhim);
          return listCumRap.danhSachPhim.map((phim, index) => {
            console.log(phim);
            return (
              <div key={index} className="wrapMovie">
                <div className="wrapInfo d-flex align-items-center">
                  <div>
                    <img src={phim.hinhAnh} alt />
                  </div>
                  <div className="info">
                    <span className="ageType">C16</span>
                    <span>{phim.tenPhim}</span>
                    <p className="mt-1">95 phút - TIX 7.2 - IMDb 0</p>
                  </div>
                </div>
                <div className="wrapSession">
                  <div className="listTypeTime">
                    <h4>2D Digital</h4>

                    {phim.lstLichChieuTheoPhim.map((lich, index) => {
                      return (
                        <>
                          <a href="#">
                            <span>
                              {format(
                                "dd-MM-yyy | hh:mm",
                                new Date(lich.ngayChieuGioChieu)
                              )}
                            </span>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          });
        });
    });
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return (
    <div>
      <Slider {...settings}>
    <div id="cinemaComplex" className="d-none d-lg-block">
      <div className="row">
        <div className="col-1">
          <ul className="listCinemas">{renderCinema()}</ul>
        </div>
        <div className="col-3">
          <div className="cinemas">{renderCinemaSystem()}</div>
        </div>
        <div className="col-8">
          <div className="listMovies">{renderShowTimeCinema()}</div>
        </div>
      </div>
    </div>
    </Slider>
    </div>
  );
}
