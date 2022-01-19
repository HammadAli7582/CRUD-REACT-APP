import axios from "axios";
import {
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_DELETE,
  USER_LIST_CREATE,
  USER_LIST_UPDATE,
} from "../constants/userContants";

export const getUserList = () => async (dispatch) => {
  try {
    const response = await axios(`http://localhost:3000/users`);
    dispatch({ type: USER_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};

export const deleteUserList = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    dispatch({ type: USER_LIST_DELETE, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};

export const createUserList = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/users`, data);
    dispatch({ type: USER_LIST_CREATE, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};

export const updateUserList = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/users/${id}`, data);
    dispatch({ type: USER_LIST_UPDATE, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};
