import { SIGN_IN } from "../constants/signIn.constant";
import axios from "axios";
export const signIn = (user) => ({
  type: SIGN_IN,
  payload: user,
});
export const signInAPI = (user, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((res) => {
        console.log(res);
        dispatch(signIn(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
