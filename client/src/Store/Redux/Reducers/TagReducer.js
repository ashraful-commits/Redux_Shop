//=========================brand product ruducer

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
} from "../ActionType";
import { InitialState } from "../InitialState";

const TagReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case TAG_REQ:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_SUCCESS:
      return {
        ...state,
        tags: payload,
      };
    case TAG_REQ_FAILD:
      return {
        ...state,
        msg: payload,
      };
    case TAG_REQ_CREATE:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_CREATE_SUCCESS:
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    case TAG_REQ_CREATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_DELETE:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_DELETE_SUCCESS:
      return {
        ...state,
        tags: [...state.tags.filter((item) => item._id !== payload)],
      };
    case TAG_REQ_DELETE_FAILD:
      return {
        ...state,
        loading: true,
      };

    case TAG_REQ_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_UPDATE_SUCCESS:
      state.tags[state.tags.findIndex((item) => item._id === payload._id)] =
        payload;
      return {
        ...state,
        tags: [...state.tags],
      };
    case TAG_REQ_UPDATE_FAILD:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_STATUS:
      return {
        ...state,
        loading: true,
      };
    case TAG_REQ_STATUS_SUCCESS:
      state.tags[state.tags.findIndex((item) => item._id === payload._id)] =
        payload;
      return {
        ...state,
        tags: [...state.tags],
      };
    case TAG_REQ_STATUS_FAILD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default TagReducer;
