import {
  GET_LIST_MOVIE_ADMIN,
  UPDATE_MOVIE_ADMIN,
} from "../constants/listMovie.constant";
const initialState = {
  listMovieAdmin: [],
  movieUpdate: {},
};
export const listMovieAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIE_ADMIN: {
      return { ...state, listMovieAdmin: action.payload.items };
    }
    case UPDATE_MOVIE_ADMIN: {
      return { ...state, movieUpdate: action.payload };
    }
    default:
      return state;
  }
};
