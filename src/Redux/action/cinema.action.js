import axios from "axios";
import {
  GET_CINEMA,
  GET_CINEMA_SYSTEM,
  GET_SHOW_TIMES_CINEMA,
} from "../constants/cinema.constant";
const getCinema = (cinema) => {
  return {
    type: GET_CINEMA,
    payload: cinema,
  };
};
export const getCinemaAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
       `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap`,
    })
      .then((res) => {
        dispatch(getCinema(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



const getCinemaSystem = (listRap) => {
  return {
    type: GET_CINEMA_SYSTEM,
    payload: listRap,
  };
};

export const getCinemaSystemAPI = (maHeThongRap) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
    })
      .then((res) => {
        // console.log("cinemaSystem", res);
        dispatch(getCinemaSystem(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getShowTimeCinema = (data) => {
  return {
    type: GET_SHOW_TIMES_CINEMA,
    payload: data,
  };
};

export const getShowTimeCinemAPI = (maHeThongRap) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`,
    })
      .then((res) => {
        // console.log("time ", res.data);
        dispatch(getShowTimeCinema(res.data));
      })
      .catch((err) => console.log(err));
  };
};

// const getCinema = (cinema) => {
//   return {
//     type: GET_CINEMA,
//     payload: cinema,
//   };
// };
// export const getCinemaAPI = () => {
//   return (dispatch) => {
//     axios({
//       method: "GET",
//       url:
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09",
//     })
//       .then((res) => {
//         dispatch(getCinema(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }