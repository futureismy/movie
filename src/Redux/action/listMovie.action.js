import axios from "axios";
import {
  GET_LIST_MOVIE_ADMIN,
  UPDATE_MOVIE_ADMIN,
} from "../constants/listMovie.constant";
const getListMovieAdmin = (listMovie) => ({
  type: GET_LIST_MOVIE_ADMIN,
  payload: listMovie,
});

export const getListMovieAdminAPI = (code) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${code}&soPhanTuTrenTrang=5`,
    })
      .then((res) => {
        dispatch(getListMovieAdmin(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const user = JSON.parse(localStorage.getItem("userLogin"));
export const deleteMovieAdminAPI = (maPhim, code) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        dispatch(getListMovieAdminAPI(code));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const addMovieAdminAPI = (movie,page) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data: movie,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        dispatch(getListMovieAdminAPI(page));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateMovieAdmin = (movie) => ({
  type: UPDATE_MOVIE_ADMIN,
  payload: movie,
});

// export const updateMovieAdminAPI = (movie) => {
//   return (dispatch) => {
//     axios({
//       method: "POST",
//       url:
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
//       data: movie,
//       headers: {
//         Authorization: `Bearer ${user.accessToken}`,
//       },
//     })
//       .then((res) => {
//         dispatch(updateMovieAdmin(movie));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
