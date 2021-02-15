import { GET_TICKET_MOVIE, CHOICE_CHAIR } from "../constants/booking.constan";
import axios from "axios";
const getTicketListAction = (listTicket) => ({
  type: GET_TICKET_MOVIE,
  payload: listTicket,
});
export const getTicketListAPI = (code) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${code}`,
    })
      .then((res) => {
        console.log(res);
        dispatch(getTicketListAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const choiceChair = (maGhe) => ({
  type: CHOICE_CHAIR,
  payload: maGhe,
});

export const bookingTicketAPI = (maLichChieu, danhSachVe, history) => {
  const user = JSON.parse(localStorage.getItem("userLogin"));
  return () => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: { maLichChieu, danhSachVe, taiKhoanNguoiDung: user.taiKhoan },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        alert("Mua thành công");
        history.push("/");
      })
      .catch((err) => {
        alert("Mua không thành công");
        console.log(err);
      });
  };
};
