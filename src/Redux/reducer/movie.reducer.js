import { GET_MOVIE, GET_MOVIE_2, MOVIE_DETAIL } from "../constants/movie.constant";

const initialState = {
  movieList: [],
  movieLis2: [],
  movieDetail: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE: {
      return { ...state, movieList: action.payload };
    }
    case GET_MOVIE_2: {
      return { ...state, movieList2: action.payload };
    }
    case MOVIE_DETAIL: {
      return { ...state, movieDetail: action.payload };
    }
    default: {
      return state;
    }
  }
};
