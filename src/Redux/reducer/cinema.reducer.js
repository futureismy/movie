import { GET_CINEMA, GET_CINEMA_SYSTEM, GET_SHOW_TIMES_CINEMA } from "../constants/cinema.constant"

const initialState= {
    listCinema:[],
    listCinemaSystem:[],
    listShowTimeCinema:[],
}
export const cinemaReducer = (state= initialState,action)=>{
    switch(action.type){
        case GET_CINEMA:{
            return {...state,listCinema:action.payload,listCinema2:action.payload}
        }
        case GET_CINEMA_SYSTEM:{
     
            return{...state,listCinemaSystem:action.payload}
        }
        case GET_SHOW_TIMES_CINEMA:{
           
            return{...state,listShowTimeCinema:action.payload}
        }
        default:{
            return state
        }
    }
}