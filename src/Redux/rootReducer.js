import {combineReducers}  from "redux"
import {movieReducer} from "./reducer/movie.reducer"
import {cinemaReducer} from "./reducer/cinema.reducer"
import {homeToolReducer} from "./reducer/homeTool.reducer"
import {signInReducer} from "./reducer/signIn.reducer"
import {bookingReducer} from "./reducer/booking.reducer"
import {userInfoReducer} from "./reducer/userInfo.reducer"
import {listMovieAdminReducer} from "./reducer/listMovie.reducer"
export const roorReducer = combineReducers(
    {movieReducer,cinemaReducer,homeToolReducer,signInReducer,bookingReducer,userInfoReducer,listMovieAdminReducer}
)