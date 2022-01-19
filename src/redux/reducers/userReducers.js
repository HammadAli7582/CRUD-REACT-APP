import {
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_DELETE,
  USER_LIST_CREATE,
  USER_LIST_UPDATE,
} from "../constants/userContants";

export const userReducerList = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_SUCCESS:
      return { users: action.payload };
    case USER_LIST_DELETE:
      return { ...state };
    case USER_LIST_CREATE:
      return { ...state };
    case USER_LIST_UPDATE:
      return { ...state };
    case USER_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
