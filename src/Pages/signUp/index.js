import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUpAPI } from "../../Redux/action/signUp.action";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup.string().required("* Field is requied!"),
      matKhau: yup.string().required("* Field is requied!"),
      hoTen: yup.string().required("* Field is requied!"),
      email: yup
        .string()
        .required("* Field is requied!")
        .email("* Email is invalid"),
      soDt: yup
        .string()
        .required()
        .matches(/^[0-9]+$/),
      maNhom: yup.string().required("* Field is requied!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      signUpAPI(values);
      history.goBack();
    },
  });
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="signin">
        <div className="sign-wrapper">
          <div class="signin-message">
            <h2>Đăng kí</h2>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div class="form-item">
              <label for="hoTen"></label>
              <input
                onChange={formik.handleChange}
                value={formik.values.hoTen}
                type="text"
                name="hoTen"
                placeholder="Họ và tên"
              ></input>
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <p className="text-danger text-left">{formik.errors.hoTen}</p>
              ) : null}
            </div>
            <div class="form-item">
              <label for="taiKhoan"></label>
              <input
                type="text"
                name="taiKhoan"
                placeholder="Tên tài khoản"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <p className="text-danger text-left">
                  {formik.errors.taiKhoan}
                </p>
              ) : null}
            </div>
            <div class="form-item">
              <label for="password"></label>
              <input
                type="password"
                name="matKhau"
                placeholder="Mật khẩu"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <p className="text-danger text-left">{formik.errors.matKhau}</p>
              ) : null}
            </div>

            <div class="form-item">
              <label for="email"></label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="Email"
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger text-left">{formik.errors.email}</p>
              ) : null}
            </div>

            <div class="form-item">
              <label for="soDt"></label>
              <input
                type="text"
                name="soDt"
                placeholder="Số điện thoại"
                value={formik.values.soDt}
                onChange={formik.handleChange}
              ></input>
              {formik.touched.soDt && formik.errors.soDt ? (
                <p className="text-danger text-left">{formik.errors.soDt}</p>
              ) : null}
            </div>

            <div className="form-item">
              <select
                onChange={formik.handleChange}
                value={formik.values.maNhom}
                className="form-select"
                name="maNhom"
              >
                <option>GP01</option>
                <option>GP02</option>
                <option>GP03</option>
                <option>GP04</option>
                <option>GP05</option>
                <option>GP06</option>
                <option>GP07</option>
                <option>GP08</option>
                <option>GP09</option>
                <option>GP10</option>
              </select>
            </div>

            <div class="button-panel">
              <input
                type="submit"
                className="button"
                title="Sign Up"
                value="Đăng kí"
              ></input>
            </div>
          </form>
          <NavLink to="/">
            <div className="signin-close"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
