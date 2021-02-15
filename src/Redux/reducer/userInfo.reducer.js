import {
  GET_USER_INFO,
  GET_USER_INFO_EDIT,
  CHANGE_KEYWORD
} from "../constants/userInfo.constant";

let initialState = {
  listUserInfo: [],
  userInfoEdit: "",
};
export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      return { ...state, listUserInfo: action.payload };
    }
    case GET_USER_INFO_EDIT: {
      return { ...state,userInfoEdit:action.payload };
    }
    case CHANGE_KEYWORD:{
      return{...state,listUserInfo: action.payload}
    }
    default: {
      return state;
    }
  }
};
