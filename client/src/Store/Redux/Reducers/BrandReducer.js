//=========================brand product ruducer

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
} from "../ActionType";
import { InitialState } from "../InitialState";

const BrandReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case BRAND_REQ:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_SUCCESS:
      return {
        ...state,
        brands: payload,
      };
    case BRAND_REQ_FAILD:
      return {
        ...state,
        msg: payload,
      };
    case BRAND_REQ_CREATE:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_CREATE_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };
    case BRAND_REQ_CREATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_DELETE:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_DELETE_SUCCESS:
      return {
        ...state,
        brands: [...state.brands.filter((item) => item._id !== payload)],
      };
    case BRAND_REQ_DELETE_FAILD:
      return {
        ...state,
        loading: true,
      };

    case BRAND_REQ_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_UPDATE_SUCCESS:
      state.brands[state.brands.findIndex((item) => item._id === payload._id)] =
        payload;
      return {
        ...state,
        brands: [...state.brands],
      };
    case BRAND_REQ_UPDATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_STATUS:
      return {
        ...state,
        loading: true,
      };
    case BRAND_REQ_STATUS_SUCCESS:
      state.brands[state.brands.findIndex((item) => item._id === payload._id)] =
        payload;
      return {
        ...state,
        brands: [...state.brands],
      };
    case BRAND_REQ_STATUS_FAILD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default BrandReducer;
