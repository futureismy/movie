import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function ModalUpdateMovie() {
  const movieUpdate = useSelector(
    (state) => state.listMovieAdminReducer.movieUpdate
  );
  let [infoMovie, setInfoMovie] = useState({
    values: {
      hinhAnh: {},
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      moTa: "",
      maNhom: "",
      ngayKhoiChieu: "",
      danhGia: "",
    },
  });
  
  useEffect(() => {
    setInfoMovie({
      ...infoMovie,
      values: movieUpdate,
    });
  }, []);
  console.log(infoMovie.values)
  return (
    <div className="modal" id="myModal3">
      <div className="modal-dialog" style={{ maxWidth: "800px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sửa phim</h4>
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
                  <input name="maPhim" type="text" />
                </div>

                <div className="form-group">
                  <label>Tên phim</label>
                  <br />
                  <input
                    className="form-control"
                    value={infoMovie.values.tenPhim}
                    type="text"
                    name="tenPhim"
                  />
                </div>

                <div className="form-group">
                  <label>Bí danh</label>
                  <br />
                  <input type="text" name="biDanh" />
                </div>

                <div className="form-group">
                  <label>Trailer</label>
                  <br />
                  <input type="text" name="trailer" />
                </div>

                <div className="form-group">
                  <label>Hình ảnh</label>
                  <br />
                  <input type="file" name="hinhAnh" />
                </div>
              </div>

              <div style={{ width: "50%", padding: "15px" }}>
                <div className="form-group">
                  <label>Mô tả</label>
                  <br />
                  <input type="text" name="moTa" />
                </div>

                <div className="form-group">
                  <label>Mã nhóm</label>
                  <br />
                  <input type="text" name="maNhom" />
                </div>

                <div className="form-group">
                  <label>Ngày khởi chiếu</label>
                  <br />
                  <input type="text" name="ngayKhoiChieu" />
                </div>

                <div className="form-group">
                  <label>Đánh giá</label>
                  <br />
                  <input type="text" name="danhGia" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" data-dismiss="modal">
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
