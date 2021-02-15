import {
  GET_MOVIE_HOMETOOL,
  GET_CINEMA_HOMETOOL,
} from "../constants/homeTool.constant";
const initialState = {
  listMovie: [],
  listCinema: [],
};
export const homeToolReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_HOMETOOL: {
      return { ...state, listMovie: action.payload };
    }
    case GET_CINEMA_HOMETOOL: {
      return { ...state, listCinema: action.payload };
    }
    default: {
      return state;
    }
  }
};
