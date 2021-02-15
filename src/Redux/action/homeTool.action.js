import axios from "axios";
import { GET_MOVIE_HOMETOOL,GET_CINEMA_HOMETOOL } from "../constants/homeTool.constant";

const getMovieHomeTool = (data) => ({
  type: GET_MOVIE_HOMETOOL,
  payload: data,
});
export const getMovieHomeToolAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    })
      .then((res) => {
        console.log('datasa movie search ', res.data);
        dispatch(getMovieHomeTool(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCinemaHomeTool = (listCinema)=>({
    type:GET_CINEMA_HOMETOOL,
    payload: listCinema
})

export const getCinemaHomeToolAPI = (maPhim)=>{
    return(dispatch)=>{
        axios({
            method:"GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        }).then((res)=>{
          console.log('maPhim ne: ',res)
            dispatch(getCinemaHomeTool(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}