import { combineReducers } from 'redux';
import * as api from '../utils/api';

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_PEOPLE_BEGIN = 'FETCH_PEOPLE_BEGIN';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';

// ------------------------------------
// Actions
// ------------------------------------
export const fetchPeopleBegin = () => ({
  type: FETCH_PEOPLE_BEGIN,
});

export const fetchPeopleSuccess = people => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: { people },
});

export const fetchPeopleFailure = error => ({
  type: FETCH_PEOPLE_FAILURE,
  payload: { error },
});

export const fetchPeople = () => {
  return (dispatch, getState) => {
    dispatch(fetchPeopleBegin());
    return api
      .fetchPeople()
      .then(json => {
        dispatch(fetchPeopleSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchPeopleFailure(error)));
  };
};

export const actions = {};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  list: [],
  loading: false,
  error: null,
}

function people(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.people,
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
}

const lunchReducer = combineReducers({
  people,
});

export const getPeople = state => state.lunch.people;

export default lunchReducer;
