import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAdminAPI } from "../../Redux/action/listMovie.action";
export default function ModalAddMovie(props) {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    values: {
      maPhim: 0,
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: null,
      moTa: "",
      maNhom: "",
      ngayKhoiChieu: "",
      danhGia: 0,
    },
  });
  const handleOnChange = (e) => {
    let { name, value, files } = e.target;
    console.log(name, value);
    let newValue = "";
    if (name === "hinhAnh") {
      newValue = { ...state.values, hinhAnh: files[0] };
    } else {
      newValue = { ...state.values, [name]: value };
    }
    setstate({
      values: newValue,
    });
  };
  const handleSubmit = () => {
  
  };

  console.log(state.values);
  return (
    <div className="modal" id="myModal2">
      <div className="modal-dialog" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Thêm phim</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form className="d-flex">
              <div style={{ width: "50%", padding: "15px" }}>
                <div className="form-group">
                  <label>Mã phim</label>
                  <br />
                  <input onChange={handleOnChange} name="maPhim" type="text" />
                </div>

                <div className="form-group">
                  <label>Tên phim</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="tenPhim" />
                </div>

                <div className="form-group">
                  <label>Bí danh</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="biDanh" />
                </div>

                <div className="form-group">
                  <label>Trailer</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="trailer" />
                </div>

                <div className="form-group">
                  <label>Hình ảnh</label>
                  <br />
                  <input type="file" onChange={handleOnChange} name="hinhAnh" />
                </div>
              </div>

              <div style={{ width: "50%", padding: "15px" }}>
                <div className="form-group">
                  <label>Mô tả</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="moTa" />
                </div>

                <div className="form-group">
                  <label>Mã nhóm</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="maNhom" />
                </div>

                <div className="form-group">
                  <label>Ngày khởi chiếu</label>
                  <br />
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="ngayKhoiChieu"
                  />
                </div>

                <div className="form-group">
                  <label>Đánh giá</label>
                  <br />
                  <input onChange={handleOnChange} type="text" name="danhGia" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => handleSubmit()}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
