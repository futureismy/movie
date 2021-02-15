import React from "react";
import { Redirect } from "react-router-dom";

export default function Guard(props) {
  const user = JSON.parse(localStorage.getItem("userLogin"));
  if (user.maLoaiNguoiDung === "QuanTri") {
    return props.children;
  } else {
    return <Redirect to="/" />;
  }
}
