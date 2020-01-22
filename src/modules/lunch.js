import { combineReducers } from 'redux';
import * as api from '../utils/api';

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_PEOPLE_BEGIN = 'FETCH_PEOPLE_BEGIN';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';
export const ADD_PERSON_BEGIN = 'ADD_PERSON_BEGIN';
export const ADD_PERSON_SUCCESS = 'ADD_PERSON_SUCCESS';
export const ADD_PERSON_FAILURE = 'ADD_PERSON_FAILURE';

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

export const addPersonBegin = () => ({
  type: ADD_PERSON_BEGIN,
})

export const addPersonSuccess = person => ({
  type: ADD_PERSON_SUCCESS,
  payload: { person },
})

export const addPersonFailure = error => ({
  type: ADD_PERSON_FAILURE,
  payload: { error },
})

export const addPerson = name => {
  return (dispatch, getState) => {
    dispatch(addPersonBegin());
    return api.addPerson(name).then(data => {
      dispatch(addPersonSuccess(data));
      return data;
    })
    .catch(error => dispatch(addPersonFailure(error)));
  }
}

export const fetchPeople = () => {
  return (dispatch, getState) => {
    dispatch(fetchPeopleBegin());
    return api
      .fetchPeople()
      .then(data => {
        dispatch(fetchPeopleSuccess(data));
        return data;
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
        loading: false,
        error: null,
        list: action.payload.people,
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case ADD_PERSON_BEGIN: 
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_PERSON_SUCCESS:
      const { list } = state;
      const { person } = action.payload
      const updatedList = list.concat(person);
      return {
        list: updatedList,
        loading: false,
        error: null,
      }
    case ADD_PERSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
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
