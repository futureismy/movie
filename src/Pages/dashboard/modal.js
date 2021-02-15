import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Modal() {
  let userInfoEdit = useSelector(
    state => state.userInfoReducer.userInfoEdit
  );
  const [state, setstate] = useState({
    values: {
      hoTen: "",
      taiKhoan: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",
      matKhau: "",
      maNhom: "",
    },
  });
 
  console.log(state.values.hoTen)
  useEffect(() => {
    setstate({ ...state, values: userInfoEdit });
  }, []);
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sửa</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Họ và tên</label>
                <br />
                <input value={state.values.hoTen} className="form-control" type="text" name="hoTen" />
              </div>

              <div className="form-group">
                <label>Tên tài khoản</label>
                <br />
                <input className="form-control" name="taiKhoan" />
              </div>

              <div className="form-group">
                <label>Số điện thoại</label>
                <br />
                <input className="form-control" name="soDt" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <br />
                <input className="form-control" name="email" />
              </div>

              <div className="form-group">
                <label>Loạn người dùng</label>
                <br />
                <select className="form-control" name="maLoaiNguoiDung">
                  <option value="QuanTri">Quản trị</option>
                  <option value="KhachHang">Khách hàng</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
