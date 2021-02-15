import React, { useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInAPI,signIn} from "../../Redux/action/signIn.action";
import {useHistory} from "react-router-dom"

export default function SignIn() {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const history = useHistory()
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Afdsfsf", user);
    dispatch(signInAPI(user,history));
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="signin">
        <div className="sign-wrapper">
          <img
            class="signin-header"
            src="https://tix.vn/app/assets/img/login/group@2x.png"
          />
          <div class="signin-message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>

          <form onSubmit={handleSubmit}>
            <div class="form-item">
              <label for="username"></label>
              <input
                type="text"
                name="taiKhoan"
                placeholder="Username"
                onChange={handleChange}
              ></input>
            </div>
            <div class="form-item">
              <label for="password"></label>
              <input
                type="password"
                name="matKhau"
                placeholder="Password"
                onChange={handleChange}
              ></input>
            </div>
            <div class="button-panel">
              <input
                type="submit"
                class="button"
                title="Sign In"
                value="Sign In"
              ></input>
            </div>
          </form>
          <div class="form-footer">
            <p>
              <NavLink to="/signUp">Create an account</NavLink>
            </p>
            <p>
              <a href="#">Forgot password?</a>
            </p>
          </div>
          <NavLink to="/">
            <div className="signin-close"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
