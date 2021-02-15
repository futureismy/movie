import React from "react";
import ListUserAdmin from "./listUserAdmin";
import ListMovieAdmin from "./listMovieAdmin";
import ModalAddMovie from "./modalAddMovie";
export default function DashBoard() {
  // const handleClick = (e) => {
  //   console.log(Number(e.target.innerText));
  //   setstate({
  //     code: Number(e.target.innerText),
  //   });
  // };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 px-0">
            <nav id="sidebar" className="active px-3">
              <ul className="list-unstyled components mb-5 nav nav-pills">
                <li className="nav-item">
                  <a class="nav-link active" data-toggle="pill" href="#home">
                    <span className="fa fa-user" /> Profile
                  </a>
                </li>

                <li className="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#menu1">
                    <span className="fa fa-user" /> Quản lí người dùng
                  </a>
                </li>

                <li className="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#menu2">
                    <span className="fa fa-user" /> Quản lí phim
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-10">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a>
                  <img
                    src="https://tix.vn/app/assets/img/icons/web-logo.png"
                    width="50px"
                  />
                </a>
              </div>
            </nav>
            <div id="content" className="tab-content">
              <div class="tab-pane active" id="home">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#myModal2"
                  className="btn btn-success"
                >
                  Thêm phim
                </button>
              </div>

              <div class="tab-pane fade" id="menu1">
                <ListUserAdmin/>
              </div>

              <div class="tab-pane fade" id="menu2">
              <ListMovieAdmin/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAddMovie/>
    </>
  );
}
