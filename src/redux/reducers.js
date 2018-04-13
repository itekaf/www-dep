import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_FILTER } from "./actions";

const initialState = {
  linters: [],
  licenses: [],
  search: '',
};

export default function linters(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_SUCCESS:
      return {...state, linters: action.payload};
    case FETCH_ERROR:
      return {...state, linters: []};
    case SET_FILTER:
      return {...state, search: action.payload};
    default:
      return state;
  }
};