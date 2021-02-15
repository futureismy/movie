import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserInfoAPI,
  deleteUserInfoAPI,
  getUserInfoEdit,
  onChangeKeyWordAPI,
} from "../../Redux/action/userInfo.action.js";
import Modal from "./modal";

export default function ListUserAdmin() {
  const [keyWord, setkeyWord] = useState({ userSearch: "" });
  const dispatch = useDispatch();
  const listUserInfo = useSelector(
    (state) => state.userInfoReducer.listUserInfo
  );
  const renderListUserInfo = () => {
    return listUserInfo.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.hoTen}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mx-3"
              data-toggle="modal"
              data-target="#myModal"
              onClick={()=>dispatch(getUserInfoEdit(user))}
            >
              Sửa
            </button>
            <button
              onClick={() => handleDelete(user.taiKhoan)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  
  //tìm kiếm user
  const handleChangeKeyWord = (e) => {
    setkeyWord({
      userSearch: e.target.value,
    });
    dispatch(onChangeKeyWordAPI(keyWord.userSearch));
  };

  //xóa user
  const handleDelete = (taiKhoan) => {
    dispatch(deleteUserInfoAPI(taiKhoan));
  };

  useEffect(() => {
    dispatch(getUserInfoAPI());
  }, []);

  return (
    <>
      <input
        className="form-control"
        style={{
          outline: "none",
          padding: "8px",
          width: "35%",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="tìm kiếm"
        onChange={handleChangeKeyWord}
      />
      <table
        className="table table-bordered table-hover"
        style={{ marginTop: "25px" }}
      >
        <thead className="bg-dark text-white" border="1">
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Tên tài khoản</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Người dùng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>{renderListUserInfo()}</tbody>
      </table>
      <Modal/>
    </>
  );
}
