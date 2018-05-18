import { loadJson } from "../utils/services";

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SET_FILTER = 'SET_FILTER';

function fetchLintersRequest(){

  return {
    type: FETCH_REQUEST
  }
}

function fetchLintersSuccess(payload) {

  return {
    type: FETCH_SUCCESS,
    payload: payload
  }
}

function fetchLintersError() {

  return {
    type: FETCH_ERROR
  }
}

export function getLinters() {

  return (dispatch) => {
    dispatch(fetchLintersRequest());
    const URL = "https://catalog.linterhub.com/bundle.json";
    return loadJson(URL)
      .then(([response, json]) => {
        if (response.status === 200) {
          let names = Object.keys(json).filter(k => k !== "$schema");
          let linters = names.map(function (item) {
            const linter = json[item];
            return {
              name: item,
              description: linter.meta.description,
              url: linter.meta.url,
              license: linter.meta.license,
              languages: linter.meta.languages
            }
          });
          dispatch(fetchLintersSuccess(linters))
        }
        else {
          dispatch(fetchLintersError())
        }
      })
  }
}


export function addLinters(linters) {

  return {
    type: 'ADD_LINTERS',
    payload: [...linters],
  }
}

export function setFilter(search) {

  return {
    type: SET_FILTER,
    payload: search
  }
}