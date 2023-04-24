//==============get all product

import axios from "axios";
import {
  BRAND_REQ,
  BRAND_REQ_CREATE,
  BRAND_REQ_CREATE_FAILD,
  BRAND_REQ_CREATE_SUCCESS,
  BRAND_REQ_DELETE,
  BRAND_REQ_DELETE_FAILD,
  BRAND_REQ_DELETE_SUCCESS,
  BRAND_REQ_FAILD,
  BRAND_REQ_STATUS,
  BRAND_REQ_STATUS_FAILD,
  BRAND_REQ_STATUS_SUCCESS,
  BRAND_REQ_SUCCESS,
  BRAND_REQ_UPDATE,
  BRAND_REQ_UPDATE_FAILD,
  BRAND_REQ_UPDATE_SUCCESS,
} from "./ActionType";

export const getAllBrandProduct = () => async (dispatch) => {
  try {
    dispatch({ type: BRAND_REQ });
    await axios
      .get("http://localhost:5050/api/v1/product/brand")
      .then((res) => {
        dispatch({ type: BRAND_REQ_SUCCESS, payload: res.data.brand });
      })
      .catch((error) => {
        dispatch({ type: BRAND_REQ_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: BRAND_REQ_FAILD, payload: error.message });
  }
};

//=================== careate brand prodcut

export const CreateBrandProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_REQ_CREATE });
    await axios
      .post("http://localhost:5050/api/v1/product/brand", data)
      .then((res) => {
        dispatch({ type: BRAND_REQ_CREATE_SUCCESS, payload: res.data.brand });
      })
      .catch((error) => {
        dispatch({ type: BRAND_REQ_CREATE_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: BRAND_REQ_CREATE_FAILD, payload: error.message });
  }
};

//=================== delete brand prodcut

export const deleteBrandProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_REQ_DELETE });
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: BRAND_REQ_DELETE_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: BRAND_REQ_DELETE_FAILD, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: BRAND_REQ_DELETE_FAILD, payload: error.message });
  }
};

//=================== update  brand prodcut

export const updateBrandProduct =
  ({ Id, form_data }) =>
  async (dispatch) => {
    try {
      dispatch({ type: BRAND_REQ_UPDATE });
      await axios
        .put(`http://localhost:5050/api/v1/product/brand/${Id}`, form_data)
        .then((res) => {
          dispatch({ type: BRAND_REQ_UPDATE_SUCCESS, payload: res.data.brand });
        })
        .catch((error) => {
          dispatch({ type: BRAND_REQ_UPDATE_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: BRAND_REQ_DELETE_FAILD, payload: error.message });
    }
  };

//============================= status update

export const statusBrandupdateProduct =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      dispatch({ type: BRAND_REQ_STATUS });
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand/${id}`, {
          status: status,
        })
        .then((res) => {
          dispatch({ type: BRAND_REQ_STATUS_SUCCESS, payload: res.data.brand });
        })
        .catch((error) => {
          dispatch({ type: BRAND_REQ_STATUS_FAILD, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: BRAND_REQ_DELETE_FAILD, payload: error.message });
    }
  };
