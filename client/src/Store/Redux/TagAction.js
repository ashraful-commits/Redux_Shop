//==============get all product

import axios from "axios";
import {
  TAG_REQ,
  TAG_REQ_CREATE,
  TAG_REQ_CREATE_FAILD,
  TAG_REQ_CREATE_SUCCESS,
  TAG_REQ_DELETE,
  TAG_REQ_DELETE_FAILD,
  TAG_REQ_DELETE_SUCCESS,
  TAG_REQ_FAILD,
  TAG_REQ_STATUS,
  TAG_REQ_STATUS_FAILD,
  TAG_REQ_STATUS_SUCCESS,
  TAG_REQ_SUCCESS,
  TAG_REQ_UPDATE,
  TAG_REQ_UPDATE_FAILD,
  TAG_REQ_UPDATE_SUCCESS,
} from "./ActionType";

export const getAllTagProduct = () => async (dispatch) => {
  try {
    dispatch({ type: TAG_REQ });
    await axios
      .get("http://localhost:5050/api/v1/product/tag")
      .then((res) => {
        console.log(res.data.tag);
        dispatch({ type: TAG_REQ_SUCCESS, payload: res.data.tag });
      })
      .catch((error) => {
        dispatch({ type: TAG_REQ_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: TAG_REQ_FAILD, payload: error.message });
  }
};

//=================== careate tag prodcut
export const CreateTagProduct =
  ({ name }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TAG_REQ_CREATE });
      await axios
        .post("http://localhost:5050/api/v1/product/tag", { name: name })
        .then((res) => {
          console.log(res.data.tag);
          dispatch({
            type: TAG_REQ_CREATE_SUCCESS,
            payload: res.data.tag,
          });
        })
        .catch((error) => {
          dispatch({ type: TAG_REQ_CREATE_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: TAG_REQ_CREATE_FAILD, payload: error.message });
    }
  };
//=================== delete tag prodcut
export const deleteTagProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: TAG_REQ_DELETE });
    await axios
      .delete(`http://localhost:5050/api/v1/product/tag/${id}`)
      .then((res) => {
        dispatch({ type: TAG_REQ_DELETE_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: TAG_REQ_DELETE_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: TAG_REQ_DELETE_FAILD, payload: error.message });
  }
};

//=================== update  tag prodcut
export const updateTagProduct =
  ({ Id, name }) =>
  async (dispatch) => {
    console.log(name);
    try {
      dispatch({ type: TAG_REQ_UPDATE });
      await axios
        .put(`http://localhost:5050/api/v1/product/tag/${Id}`, { name })
        .then((res) => {
          dispatch({
            type: TAG_REQ_UPDATE_SUCCESS,
            payload: res.data.tag,
          });
        })
        .catch((error) => {
          dispatch({ type: TAG_REQ_UPDATE_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: TAG_REQ_DELETE_FAILD, payload: error.message });
    }
  };

//============================= status update

export const statusTagupdateProduct =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TAG_REQ_STATUS });
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag/${id}`, {
          status: status,
        })
        .then((res) => {
          console.log(res.data.tag);
          dispatch({
            type: TAG_REQ_STATUS_SUCCESS,
            payload: res.data.tag,
          });
        })
        .catch((error) => {
          dispatch({ type: TAG_REQ_STATUS_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: TAG_REQ_DELETE_FAILD, payload: error.message });
    }
  };
