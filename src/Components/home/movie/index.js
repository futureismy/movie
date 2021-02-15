import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListAPI,getMovieListAPI2 } from "../../../Redux/action/movie.action";
import { NavLink } from "react-router-dom";

export default function Movie() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAPI());
    dispatch(getMovieListAPI2());
  });
  const state = useSelector((state) => state.movieReducer.movieList);
  const state2 = useSelector((state) => state.movieReducer.movieList2);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };
  return (
    <div id="homeMovies">
      <div className="movies_list">
        <div className="movies_heading">
          <ul
            className="nav nav-pills d-flex justify-content-center align-items-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#dangchieu"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#sapchieu">
                Sắp Chiếu
              </a>
            </li>
          </ul>
        </div>
        <div className="movies_detail">
          <div className="tab-content">
            <div id="dangchieu" className="container tab-pane active">
              <Slider {...settings}>
                {state?.map((movie, index) => {
                  return (
                    <div key={index} className="film col-12">
                      <div className="film_img">
                        <a href="#">
                          <img src={movie.hinhAnh} alt="film1" height="297px" />
                        </a>
                        <NavLink to={`/detail/${movie.maPhim}`}>
                          <div className="bg-overlay"></div>
                        </NavLink>
                        <a href="#">
                          <div className="play">
                            <a
                              className="venobox"
                              data-vbtype="video"
                              href={movie.trailer}
                            >
                              <img
                                src="http://tix.vn/app/assets/img/icons/play-video.png"
                                alt="video1"
                              />
                            </a>
                          </div>
                        </a>

                        <div className="review">
                          <p>{movie.danhGia}</p>
                          <div className="star">
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.2.png" />
                          </div>
                        </div>
                      </div>

                      <div className="film_info">
                        <div className="name-film">
                          <span className="ageType">C18</span>
                          <span>{movie.tenPhim}(C18)</span>
                        </div>
                        <div className="minutes-film">
                          <p>100 phút </p>
                        </div>
                        <div className="buyNow">
                          <NavLink to={`/detail/${movie.maPhim}`}>
                            <button type="button">Mua vé</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div id="sapchieu" className="container tab-pane fade">
              <Slider {...settings}>
                {state2?.map((movie, index) => {
                  return (
                    <div key={index} className="film col-12">
                      <div className="film_img">
                        <a href="#">
                          <img src={movie.hinhAnh} alt="film1" height="297px" />
                        </a>
                        <NavLink to={`/detail/${movie.maPhim}`}>
                          <div className="bg-overlay"></div>
                        </NavLink>
                        <a href="#">
                          <div className="play">
                            <a
                              className="venobox"
                              data-vbtype="video"
                              href={movie.trailer}
                            >
                              <img
                                src="http://tix.vn/app/assets/img/icons/play-video.png"
                                alt="video1"
                              />
                            </a>
                          </div>
                        </a>

                        <div className="review">
                          <p>{movie.danhGia}</p>
                          <div className="star">
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.png" />
                            <img src="http://tix.vn/app/assets/img/icons/star1.2.png" />
                          </div>
                        </div>
                      </div>

                      <div className="film_info">
                        <div className="name-film">
                          <span className="ageType">C18</span>
                          <span>{movie.tenPhim}(C18)</span>
                        </div>
                        <div className="minutes-film">
                          <p>100 phút </p>
                        </div>
                        <div className="buyNow">
                          <NavLink to={`/detail/${movie.maPhim}`}>
                            <button type="button">Mua vé</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
