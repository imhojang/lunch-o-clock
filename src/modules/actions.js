import * as api from '../utils/api'
import * as types from './actiontypes'

// People Actions

export const fetchPeopleBegin = () => ({
  type: types.FETCH_PEOPLE_BEGIN
})

export const fetchPeopleSuccess = people => ({
  type: types.FETCH_PEOPLE_SUCCESS,
  payload: { people }
})

export const fetchPeopleFailure = error => ({
  type: types.FETCH_PEOPLE_FAILURE,
  payload: { error }
})

export const addPersonBegin = () => ({
  type: types.ADD_PERSON_BEGIN
})

export const addPersonSuccess = person => ({
  type: types.ADD_PERSON_SUCCESS,
  payload: { person }
})

export const addPersonFailure = error => ({
  type: types.ADD_PERSON_FAILURE,
  payload: { error }
})

export const deletePersonBegin = () => ({
  type: types.DELETE_PERSON_BEGIN
})

export const deletePersonSuccess = person => ({
  type: types.DELETE_PERSON_SUCCESS,
  payload: { person }
})

export const deletePersonFailure = error => ({
  type: types.DELETE_PERSON_FAILURE,
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
  type: types.INCREMENT_GROUP_OPTION_COUNT
})

export const decrementGroupOptionCount = () => ({
  type: types.DECREMENT_GROUP_OPTION_COUNT
})

export const updateGroupOptionCount = value => ({
  type: types.UPDATE_GROUP_OPTION_COUNT,
  payload: { value }
})

export const createGroup = people => ({
  type: types.CREATE_GROUP,
  payload: { people }
})

export const setGroupOptionToMinimumSize = () => ({
  type: types.MINIMUM_SIZE
})

export const setGroupOptionToNumberOfGroups = () => ({
  type: types.NUMBER_OF_GROUPS
})

// Input actions

export const updateInputValue = value => ({
  type: types.UPDATE_INPUT_VALUE,
  payload: { value }
})

export const actions = {}
