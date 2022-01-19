import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducerList } from "./reducers/userReducers";
import { userReducerDetail } from "./reducers/userDetailReducers";

// combine reducers
const reducers = combineReducers({
  userList: userReducerList,
  userDetail: userReducerDetail,
  // deleteList: deleteUserReducerList,
});
// initialState
const initialState = {};
// middleware
const middleware = [thunk];
// create store
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
