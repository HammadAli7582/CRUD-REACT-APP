import {
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
} from "../constants/userContants";

export const userReducerDetail = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_DETAIL_SUCCESS:
      return { user: action.payload };
    // case USER_LIST_DELETE:
    //   return { ...state };
    // case USER_LIST_CREATE:
    //   return { ...state };
    // case USER_LIST_UPDATE:
    //   return { ...state };
    case USER_DETAIL_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
