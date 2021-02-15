import {
  GET_USER_INFO,
  GET_USER_INFO_EDIT,
  CHANGE_KEYWORD,
} from "../../Redux/constants/userInfo.constant";
import axios from "axios";

const getUserInfo = (userInfo) => ({
  type: GET_USER_INFO,
  payload: userInfo,
});
export const getUserInfoAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09",
    })
      .then((res) => {
        console.log(res);
        dispatch(getUserInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const user = JSON.parse(localStorage.getItem("userLogin"));
export const deleteUserInfoAPI = (taiKhoan) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        dispatch(getUserInfoAPI());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserInfoEdit = (userInfoEdit) => {
  return {
    type: GET_USER_INFO_EDIT,
    payload: userInfoEdit,
  };
};

const onChangeKeyWord = (keyWord) => ({
  type: CHANGE_KEYWORD,
  payload: keyWord,
});
export const onChangeKeyWordAPI = (keyWord) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${keyWord}`,
    })
      .then((res) => {
        dispatch(onChangeKeyWord(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
