//==============get all product

import axios from "axios";
import {
  CATAGORY_REQ,
  CATAGORY_REQ_CREATE,
  CATAGORY_REQ_CREATE_FAILD,
  CATAGORY_REQ_CREATE_SUCCESS,
  CATAGORY_REQ_DELETE,
  CATAGORY_REQ_DELETE_FAILD,
  CATAGORY_REQ_DELETE_SUCCESS,
  CATAGORY_REQ_FAILD,
  CATAGORY_REQ_STATUS,
  CATAGORY_REQ_STATUS_FAILD,
  CATAGORY_REQ_STATUS_SUCCESS,
  CATAGORY_REQ_SUCCESS,
  CATAGORY_REQ_UPDATE,
  CATAGORY_REQ_UPDATE_FAILD,
  CATAGORY_REQ_UPDATE_SUCCESS,
} from "./ActionType";

export const getAllCatagoryProduct = () => async (dispatch) => {
  try {
    dispatch({ type: CATAGORY_REQ });
    await axios
      .get("http://localhost:5050/api/v1/product/catagory")
      .then((res) => {
        console.log(res.data.catagory);
        dispatch({ type: CATAGORY_REQ_SUCCESS, payload: res.data.catagory });
      })
      .catch((error) => {
        dispatch({ type: CATAGORY_REQ_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: CATAGORY_REQ_FAILD, payload: error.message });
  }
};

//=================== careate catagory prodcut
export const CreateCatagoryProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: CATAGORY_REQ_CREATE });
    await axios
      .post("http://localhost:5050/api/v1/product/catagory", data)
      .then((res) => {
        dispatch({
          type: CATAGORY_REQ_CREATE_SUCCESS,
          payload: res.data.catagory,
        });
      })
      .catch((error) => {
        dispatch({ type: CATAGORY_REQ_CREATE_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: CATAGORY_REQ_CREATE_FAILD, payload: error.message });
  }
};
//=================== delete catagory prodcut
export const deleteCatagoryProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATAGORY_REQ_DELETE });
    await axios
      .delete(`http://localhost:5050/api/v1/product/catagory/${id}`)
      .then((res) => {
        dispatch({ type: CATAGORY_REQ_DELETE_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: CATAGORY_REQ_DELETE_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: CATAGORY_REQ_DELETE_FAILD, payload: error.message });
  }
};

//=================== update  catagory prodcut
export const updateCatagoryProduct =
  ({ Id, form_data }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CATAGORY_REQ_UPDATE });
      await axios
        .put(`http://localhost:5050/api/v1/product/catagory/${Id}`, form_data)
        .then((res) => {
          dispatch({
            type: CATAGORY_REQ_UPDATE_SUCCESS,
            payload: res.data.catagory,
          });
        })
        .catch((error) => {
          dispatch({ type: CATAGORY_REQ_UPDATE_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: CATAGORY_REQ_DELETE_FAILD, payload: error.message });
    }
  };

//============================= status update

export const statusCatagoryupdateProduct =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CATAGORY_REQ_STATUS });
      await axios
        .patch(`http://localhost:5050/api/v1/product/catagory/${id}`, {
          status: status,
        })
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: CATAGORY_REQ_STATUS_SUCCESS,
            payload: res.data.catagory,
          });
        })
        .catch((error) => {
          dispatch({ type: CATAGORY_REQ_STATUS_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: CATAGORY_REQ_DELETE_FAILD, payload: error.message });
    }
  };
