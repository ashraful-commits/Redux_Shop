//=========================CATAGORY product ruducer

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
} from "../ActionType";
import { InitialState } from "../InitialState";

const catgoryReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case CATAGORY_REQ:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_SUCCESS:
      return {
        ...state,
        catagorys: payload,
      };
    case CATAGORY_REQ_FAILD:
      return {
        ...state,
        msg: payload,
      };
    case CATAGORY_REQ_CREATE:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_CREATE_SUCCESS:
      return {
        ...state,
        catagorys: [...state.catagorys, payload],
      };
    case CATAGORY_REQ_CREATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_DELETE:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_DELETE_SUCCESS:
      return {
        ...state,
        catagorys: [...state.catagorys.filter((item) => item._id !== payload)],
      };
    case CATAGORY_REQ_DELETE_FAILD:
      return {
        ...state,
        loading: true,
      };

    case CATAGORY_REQ_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_UPDATE_SUCCESS:
      state.catagorys[
        state.catagorys.findIndex((item) => item._id === payload._id)
      ] = payload;
      return {
        ...state,
        catagorys: [...state.catagorys],
      };
    case CATAGORY_REQ_UPDATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_STATUS:
      return {
        ...state,
        loading: true,
      };
    case CATAGORY_REQ_STATUS_SUCCESS:
      state.catagorys[
        state.catagorys.findIndex((item) => item._id === payload._id)
      ] = payload;
      return {
        ...state,
        catagorys: [...state.catagorys],
      };
    case CATAGORY_REQ_STATUS_FAILD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default catgoryReducer;
