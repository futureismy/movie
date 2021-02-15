import { GET_MOVIE, GET_MOVIE_2, MOVIE_DETAIL } from "../constants/movie.constant";
import axios from "axios";
const getMovieList = (listMovie) => {
  return {
    type: GET_MOVIE,
    payload: listMovie,
  };
};

export const getMovieListAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06",
    })
      .then((res) => {
        dispatch(getMovieList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMovieDetail = (movieDetail) => ({
  type: MOVIE_DETAIL,
  payload: movieDetail,
});

export const getMovieDetailAPI = (maPhim) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
    })
      .then((res) => {
        console.log(res)
        dispatch(getMovieDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


const getMovieList2 = (listMovie) => {
  return {
    type: GET_MOVIE_2,
    payload: listMovie,
  };
};

export const getMovieListAPI2 = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
    })
      .then((res) => {
        dispatch(getMovieList2(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};