import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const userName = useSelector((state) => state.signInReducer.userSignIn);
  console.log(userName);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <header>
      <div className="overlay" />
      <nav className="navbar navbar-expand-md">
        {/* Brand */}
        <NavLink exact to="/">
          <a className="navbar-brand" href="#">
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
            />
          </a>
        </NavLink>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button">
          {/* <span class="navbar-toggler-icon"></span> */}
          <img src="https://tix.vn/app/assets/img/icons/menu-options.png" alt />
        </button>
        {/* Navbar links */}
        <div className="navbar-collapse">
          <div className="navbar_info order-2">
            <div className="navbar_info-account d-flex align-items-center">
                <img
                  src="https://tix.vn/app/assets/img/avatar.png"
                  alt="account"
                />
                {userName ? (
                  <span style={{cursor:'pointer'}}>{userName.taiKhoan}</span>
                ) : (
                  <NavLink to="/signIn">
                  <span>Đăng nhập</span>
                  </NavLink>
                )}
            </div>
            {userName ? (
              <div className="logout">
                <p onClick={() => logout()}>Đăng xuất</p>
              </div>
            ) : (
              ""
            )}

            <div className="out d-lg-none">
              <i className="fas fa-chevron-right" />
            </div>
          </div>
          <ul className="navbar-nav order-1">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ứng dụng
              </a>
            </li>
          </ul>
          <div className="navbar_info-location d-flex align-items-center order-3">
            <img
              src="https://tix.vn/app/assets/img/icons/location-header.png"
              alt="location"
            />
            <div className="dropdown">
              <button
                type="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
              >
                Hồ Chí Minh
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  {" "}
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#">
                  Hải Phòng
                </a>
                <a className="dropdown-item" href="#">
                  Biên Hòa
                </a>
                <a className="dropdown-item" href="#">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#">
                  Vũng Tàu
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
