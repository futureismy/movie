import Detail from "../Pages/detail";
import Home from "../Pages/home";
import SignIn from "../Pages/signIn";
import SignUp from "../Pages/signUp";
import DashBoard from "../Pages/dashboard";
import Booking from "../Pages/booking";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/detail/:maPhim",
    exact: true,
    Component: Detail,
  },
  {
    path: "/signIn",
    exact: true,
    Component: SignIn,
  },
  {
    path: "/signUp",
    exact: true,
    Component: SignUp,
  },
];

export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: DashBoard,
  },
];

export const bookingRouter = [
  {
    path: "/booking/:code",
    exact: true,
    Component: Booking,
  },
];
