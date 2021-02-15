import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./Pages/home";
import Detail from "./Pages/detail";
import Header from "./Components/home/header";
import Footer from "./Components/home/footer";
import "./main.scss";
import Booking from "./Pages/booking";
import SignIn from "./Pages/signIn";
import { useDispatch } from "react-redux";
import { signIn } from "./Redux/action/signIn.action";
import SignUp from "./Pages/signUp";
import { mainRouter, adminRouter, bookingRouter } from "./config/router";
import { RouterMain } from "./templates/main/index";
import { RouterAdmin } from "./templates/admin/index";
import { RouterBooking } from "./templates/booking/index";
import Guard from "./HOC/Guard/index";

function App() {
  const dispatch = useDispatch();
  const getUserFromLocal = () => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    console.log(userLocal);
    if (userLocal) {
      dispatch(signIn(userLocal));
    }
  };
  useEffect(() => {
    getUserFromLocal();
  }, []);

  const renderMainRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterMain key={index} {...router}></RouterMain>;
    });
  };
  const renderAdminRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return (
        
          <RouterAdmin key={index} {...router}></RouterAdmin>
        
      );
    });
  };

  const renderBookingRouter = (listRouter) => {
    return listRouter.map((router, index) => {
      return <RouterBooking key={index} {...router}></RouterBooking>;
    });
  };
  return (
    <BrowserRouter>
      {/* <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail/:maPhim">
          <Detail />
        </Route>
        <Route exact path="/booking/:code">
          <Booking />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
        <Route exact path="/signUp">
          <SignUp/>
        </Route>
      </Switch>
      <Footer /> */}
      {renderMainRouter(mainRouter)}
      {renderAdminRouter(adminRouter)}
      {renderBookingRouter(bookingRouter)}
    </BrowserRouter>
  );
}

export default App;
