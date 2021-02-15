import { SIGN_IN } from "../constants/signIn.constant";

const initialState = {
  userSignIn: null,
};
export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, userSignIn: action.payload };
    }
    default: {
      return state;
    }
  }
};
