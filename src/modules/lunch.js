import { combineReducers } from 'redux'
import * as api from '../utils/api'
import {
  checkGroupSize,
  chunkArrayBySize,
  chunkArrayByCount,
  shuffleArray
} from '../utils'

// ------------------------------------
// Constants
// ------------------------------------

export const FETCH_PEOPLE_BEGIN = 'FETCH_PEOPLE_BEGIN'
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS'
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE'
export const ADD_PERSON_BEGIN = 'ADD_PERSON_BEGIN'
export const ADD_PERSON_SUCCESS = 'ADD_PERSON_SUCCESS'
export const ADD_PERSON_FAILURE = 'ADD_PERSON_FAILURE'
export const DELETE_PERSON_BEGIN = 'DELETE_PERSON_BEGIN'
export const DELETE_PERSON_SUCCESS = 'DELETE_PERSON_SUCCESS'
export const DELETE_PERSON_FAILURE = 'DELETE_PERSON_FAILURE'

export const INCREMENT_GROUP_OPTION_COUNT = 'INCREMENT_GROUP_OPTION_COUNT'
export const DECREMENT_GROUP_OPTION_COUNT = 'DECREMENT_GROUP_OPTION_COUNT'
export const UPDATE_GROUP_OPTION_COUNT = 'UPDATE_GROUP_OPTION_COUNT'
export const CREATE_GROUP = 'CREATE_GROUP'
export const MINIMUM_SIZE = 'MINIMUM_SIZE'
export const NUMBER_OF_GROUPS = 'NUMBER_OF_GROUPS'

// ------------------------------------
// Actions
// ------------------------------------

// People Actions

export const fetchPeopleBegin = () => ({
  type: FETCH_PEOPLE_BEGIN
})

export const fetchPeopleSuccess = people => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: { people }
})

export const fetchPeopleFailure = error => ({
  type: FETCH_PEOPLE_FAILURE,
  payload: { error }
})

export const addPersonBegin = () => ({
  type: ADD_PERSON_BEGIN
})

export const addPersonSuccess = person => ({
  type: ADD_PERSON_SUCCESS,
  payload: { person }
})

export const addPersonFailure = error => ({
  type: ADD_PERSON_FAILURE,
  payload: { error }
})

export const deletePersonBegin = () => ({
  type: DELETE_PERSON_BEGIN
})

export const deletePersonSuccess = person => ({
  type: DELETE_PERSON_SUCCESS,
  payload: { person }
})

export const deletePersonFailure = error => ({
  type: DELETE_PERSON_FAILURE,
  payload: { error }
})

export const fetchPeople = () => {
  return (dispatch, getState) => {
    dispatch(fetchPeopleBegin())
    return api
      .fetchPeople()
      .then(data => {
        dispatch(fetchPeopleSuccess(data))
        return data
      })
      .catch(error => dispatch(fetchPeopleFailure(error)))
  }
}

export const addPerson = name => {
  return (dispatch, getState) => {
    dispatch(addPersonBegin())
    return api
      .addPerson(name)
      .then(data => {
        dispatch(addPersonSuccess(data))
        return data
      })
      .catch(error => dispatch(addPersonFailure(error)))
  }
}

export const deletePerson = name => {
  return (dispatch, getState) => {
    dispatch(deletePersonBegin())
    return api
      .deletePerson(name)
      .then(data => {
        dispatch(deletePersonSuccess(data))
        return data
      })
      .catch(error => dispatch(deletePersonFailure(error)))
  }
}

// Group Actions

export const incrementGroupOptionCount = () => ({
  type: INCREMENT_GROUP_OPTION_COUNT
})

export const decrementGroupOptionCount = () => ({
  type: DECREMENT_GROUP_OPTION_COUNT
})

export const updateGroupOptionCount = value => ({
  type: UPDATE_GROUP_OPTION_COUNT,
  payload: { value }
})

export const createGroup = people => ({
  type: CREATE_GROUP,
  payload: { people }
})

export const setGroupOptionToMinimumSize = () => ({
  type: MINIMUM_SIZE
})

export const setGroupOptionToNumberOfGroups = () => ({
  type: NUMBER_OF_GROUPS
})

export const actions = {}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  list: [],
  loading: false,
  error: null
}

const people = (state = initialState, action) => {
  let list
  let person
  let updatedList

  switch (action.type) {
    case FETCH_PEOPLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        error: null,
        list: action.payload.people
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case ADD_PERSON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_PERSON_SUCCESS:
      list = state.list
      person = action.payload.person
      updatedList = list.concat(person)
      alert(`Successfully added ${person.name}.`)
      return {
        list: updatedList,
        loading: false,
        error: null
      }
    case ADD_PERSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case DELETE_PERSON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case DELETE_PERSON_SUCCESS:
      list = state.list
      person = action.payload.person
      updatedList = list.filter(item => item.name !== person.name)
      alert(`Successfully deleted ${person.name}.`)
      return {
        list: updatedList,
        loading: false,
        error: null
      }
    case DELETE_PERSON_FAILURE:
      return {
        ...state,
        loading: true,
        error: null
      }
    default:
      return state
  }
}

const group = (
  state = { number: 1, list: [], option: NUMBER_OF_GROUPS },
  action
) => {
  switch (action.type) {
    case INCREMENT_GROUP_OPTION_COUNT:
      return {
        ...state,
        number: Number(state.number) + 1
      }
    case DECREMENT_GROUP_OPTION_COUNT:
      if (state.number <= 1) {
        alert('Please select a number greater than or equal to 1.')
        return {
          ...state
        }
      }
      return {
        ...state,
        number: Number(state.number) - 1
      }
    case UPDATE_GROUP_OPTION_COUNT:
      return {
        ...state,
        number: action.payload.value
      }
    case MINIMUM_SIZE:
      return {
        ...state,
        option: MINIMUM_SIZE,
        list: []
      }
    case NUMBER_OF_GROUPS:
      return {
        ...state,
        option: NUMBER_OF_GROUPS,
        list: []
      }
    case CREATE_GROUP:
      if (state.option === MINIMUM_SIZE) {
        if (checkGroupSize(action.payload.people, state.number)) {
          const shuffledPeople = shuffleArray(action.payload.people)
          const groups = chunkArrayBySize(shuffledPeople, state.number)
          return {
            ...state,
            list: groups
          }
        }
      }
      if (state.option === NUMBER_OF_GROUPS) {
        if (checkGroupSize(action.payload.people, state.number)) {
          const shuffledPeople = shuffleArray(action.payload.people)
          const groups = chunkArrayByCount(shuffledPeople, state.number)
          return {
            ...state,
            list: groups
          }
        }
      }
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}

const lunchReducer = combineReducers({
  people,
  group
})

export const getPeople = state => state.lunch.people
export const getGroupOptionCount = state => state.lunch.group.number
export const getGroupOption = state => state.lunch.group.option
export const getGroup = state => state.lunch.group.list

export default lunchReducer
