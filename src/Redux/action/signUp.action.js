import axios from "axios";
export const signUpAPI = (userSignUp) => {
  axios({
    method: "POST",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
    data: userSignUp,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
