import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTicketListAPI,
  choiceChair,
  bookingTicketAPI,
} from "../../Redux/action/booking.action";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles(() => {
  return {
    booked: { cursor: "no-drop", backgroundColor: "ddd" },
    choice: { backgroundColor: "#44c020" },
    notBook: { backgroundColor: "#3e515d" },
    vip: { backgroundColor: "orange" },
  };
});

export default function Booking() {
  const history = useHistory();
  const classes = useStyle();
  const { code } = useParams();
  const dispatch = useDispatch();
  const { chairList } = useSelector((state) => state.bookingReducer);
  const { infoTicket } = useSelector((state) => state.bookingReducer);
  const user = JSON.parse(localStorage.getItem("userLogin"));
  console.log(chairList);
  const [state, setstate] = useState({ total: 0 });
  const [seconds, setSeconds] = useState(300);
  const renderStatusChair = (booked, choice, loaiGhe) => {
    if (booked) {
      return classes.booked;
    } else {
      if (choice) {
        return classes.choice;
      } else {
        if (loaiGhe === "Vip") {
          return classes.vip;
        } else {
          return classes.notBook;
        }
      }
    }
  };
  const handleChoice = (maGhe) => {
    dispatch(choiceChair(maGhe));
    setstate({
      total: total(),
    });
  };
  const renderChairList = () => {
    return chairList.map((chair, index) => {
      if (chair.daDat) {
        return (
        
          <i 
            key={index}
            className={renderStatusChair(
              chair.daDat,
              chair.dangChon,
              chair.loaiGhe
            )}
          >
            <i className="fas fa-times" style={{ color: "#fff" }}></i>
          </i>
        );
      }
      return (
        <button
          style={{ color: "#fff" }}
          onClick={() => handleChoice(chair.maGhe)}
          key={index}
          className={renderStatusChair(
            chair.daDat,
            chair.dangChon,
            chair.loaiGhe
          )}
        >
          {chair.dangChon ? (
            chair.tenGhe
          ) : (
            <span style={{ opacity: "0" }}>1</span>
          )}
        </button>
      );
    });
  };

  const total = () => {
    return chairList
      .filter((chair) => chair.dangChon)
      .reduce((tt, giaGheDangChon, index) => {
        return (tt += giaGheDangChon.giaVe);
      }, 0);
  };
  useEffect(() => {
    dispatch(getTicketListAPI(code));
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        const updatedCounter = seconds - 1;
        if (updatedCounter === -1) {
          alert("Dsfsdfs");
          return 301;
        }
        return updatedCounter;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="booking">
      <div id="checkout">
        <div id="stepcheckout">
          <div className="leftstep">
            <h4 style={{ paddingTop: "30px", color: "#fb4226" }}>
              Chọn ghế và thanh toán
            </h4>
          </div>
          <div className="rightstep">
            <div className="info-account d-flex align-items-center">
              <img
                src="https://tix.vn/app/assets/img/avatar.png"
                alt="account"
              />
              <span style={{ color: "#9b9b9b" }} className="ml-2">
                {user.taiKhoan}
              </span>
            </div>
          </div>
        </div>

        <div id="seatcheckout2">
          <div id="seatv2">
            <div className="topContent">
              <div className="lefttitle">
                <div className="logocinema">
                  <img
                    className="logo"
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                  />
                </div>

                <div className="contentcinema">
                  <p className="address">
                    <span className="pcinema">{infoTicket.tenCumRap}</span>
                  </p>
                  <p className="hour">
                    {infoTicket.ngayChieu} - {infoTicket.gioChieu} -{" "}
                    {infoTicket.tenRap}
                  </p>
                </div>
              </div>
              <div className="righttitle">
                <p className="info1">thời gian giữ ghế</p>
                <p className="info2">
                  <span className="second">{seconds}s</span>
                </p>
              </div>
            </div>
            <div className="seatmap">
              <div className="parent-panzoom">
                <div className="room panzoom" id="seatmanroom">
                  <div className="screen">
                    <div className="namescreen">
                      <img
                        class="logo"
                        src="https://tix.vn/app/assets/img/icons/screen.png"
                      />
                    </div>
                  </div>
                  <div className="listseat">
                    <div className="container-seat">
                      
                      <div className="rowseat">{renderChairList()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="noteseat">
                <div className="typeseats">
                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế thường</span>
                    <button
                      style={{ backgroundColor: "#3e515d" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế VIP</span>
                    <button
                      style={{ backgroundColor: "#f7b500" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế đang chọn</span>
                    <button
                      style={{ backgroundColor: "#44c020" }}
                      className="chairType"
                    ></button>
                  </span>

                  <span className="colorseat colornormal">
                    <span className="nameseat">Ghế đã có người chọn</span>
                    <button
                      style={{ backgroundColor: "#ddd" }}
                      className="chairType"
                    ></button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightcheckout">
          <div className="contentfullright">
            <div className="total">
              <p className="cash" id="totalcost">
                {state.total} đ
              </p>
            </div>
            <div className="filmname">
              <span className="ageType">C18</span>
              <span style={{ fontWeight: "700", fontSize: "17px" }}>
                {infoTicket.tenPhim}
              </span>
              <div className="contentcinema">
                <div className="address">
                  <span className="pcinema ng-binding">
                    {infoTicket.tenCumRap}
                  </span>
                  {/* <span className="cinemaname ng-binding"> - Vincom 3/2</span> */}
                </div>
                <div className="hour ng-binding">
                  {infoTicket.ngayChieu} - {infoTicket.gioChieu} -{" "}
                  {infoTicket.tenRap}
                </div>
              </div>
            </div>

            <div className="chair">
              <div className="info">
                Ghế
                {chairList
                  .filter((chair) => chair.dangChon)
                  .map((chair, index) => {
                    return <span className="mx-1">{chair.tenGhe}</span>;
                  })}
              </div>
              <div className="totalchair">{state.total}</div>
            </div>
          </div>
         
            <button
              className='btn btn-success buyticket'
              onClick={() => {
                const newChairList = chairList
                  .filter((chair) => chair.dangChon)
                  .map((chair) => ({ maGhe: chair.maGhe, giaVe: chair.giaVe }));
                dispatch(bookingTicketAPI(code, newChairList, history));
              }}
              variant="contained" color="success"
            >
              Đặt vé
            </button>
        </div>
      </div>
    </div>
  );
}
