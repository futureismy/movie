import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListMovieAdminAPI,
  deleteMovieAdminAPI,
} from "../../Redux/action/listMovie.action";
import ModalUpdateMovie from "./modalUpdateMovie";

export default function ListMovieAdmin() {
  const [state, setstate] = useState({ code: 1 });
  const dispatch = useDispatch();
  const listMovie = useSelector(
    (state) => state.listMovieAdminReducer.listMovieAdmin
  );

  const renderListMovie = () => {
    return listMovie?.map((movie, index) => {
      return (
        <tr key={index}>
          <td>{movie.maPhim}</td>
          <td>{movie.tenPhim}</td>
          <td>{movie.biDanh}</td>
          <td>
            <img
              style={{ width: "70px", height: "90px" }}
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
            />
          </td>
          <td>{movie.trailer}</td>
          <td>{movie.moTa}</td>
          <td>{movie.ngayKhoiChieu}</td>
          <td>{movie.danhGia}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mx-3"
              data-toggle="modal"
              data-target="#myModal3"
            >
              Sửa
            </button>
            <button
              onClick={() => handleDeleteMovie(movie.maPhim, state.code)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  const handleClickNext = () => {
    let tong = state.code;
    setstate({
      code: (tong += 1),
    });
  };

  const handleClickPrev = () => {
    let tong = state.code;
    setstate({
      code: (tong -= 1),
    });
  };

  const handleDeleteMovie = (maPhim, code) => {
    dispatch(deleteMovieAdminAPI(maPhim, code));
  };

  useEffect(() => {
    dispatch(getListMovieAdminAPI(state.code));
  }, [state.code]);

  return (
    <>
      <table className="table table-hover">
        <thead className="bg-dark text-white" border="1">
          <tr>
            <th>Mã phim</th>
            <th>Tên phim</th>
            <th>Bí danh</th>
            <th>Hình ảnh</th>
            <th>Trailer</th>
            <th>Mô tả</th>
            <th>Ngày khởi chiếu</th>
            <th>Đánh giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderListMovie()}</tbody>
      </table>

      <ul className="pagination">
        {state.code > 1 ? (
          <li className="page-item">
            <a onClick={() => handleClickPrev()} className="page-link" href="#">
              Previous
            </a>
          </li>
        ) : (
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
        )}

        <li className="page-item">
          <a className="page-link">{state.code}</a>
        </li>
        <li className="page-item">
          <a
            onClick={() => {
              handleClickNext();
            }}
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>

      <ModalUpdateMovie />
    </>
  );
}
