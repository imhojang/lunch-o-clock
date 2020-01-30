import { combineReducers } from 'redux'
import * as types from './actiontypes'
import {
  checkGroupSize,
  chunkArrayBySize,
  chunkArrayByCount,
  shuffleArray
} from '../utils'

const peopleInitialState = {
  list: [],
  loading: false,
  error: null
}

export const people = (state = peopleInitialState, action) => {
  let list
  let person
  let updatedList

  switch (action.type) {
    case types.FETCH_PEOPLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        error: null,
        list: action.payload.people
      }
    case types.FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case types.ADD_PERSON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.ADD_PERSON_SUCCESS:
      list = state.list
      person = action.payload.person
      updatedList = list.concat(person)
      return {
        list: updatedList,
        loading: false,
        error: null
      }
    case types.ADD_PERSON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case types.DELETE_PERSON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.DELETE_PERSON_SUCCESS:
      list = state.list
      person = action.payload.person
      updatedList = list.filter(item => item.name !== person.name)
      return {
        list: updatedList,
        loading: false,
        error: null
      }
    case types.DELETE_PERSON_FAILURE:
      return {
        ...state,
        loading: true,
        error: null
      }
    default:
      return state
  }
}

const groupInitialState = {
  number: 1,
  list: [],
  option: types.NUMBER_OF_GROUPS
}

export const group = (state = groupInitialState, action) => {
  switch (action.type) {
    case types.INCREMENT_GROUP_OPTION_COUNT:
      return {
        ...state,
        number: Number(state.number) + 1
      }
    case types.DECREMENT_GROUP_OPTION_COUNT:
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
    case types.UPDATE_GROUP_OPTION_COUNT:
      return {
        ...state,
        number: action.payload.value
      }
    case types.MINIMUM_SIZE:
      return {
        ...state,
        option: types.MINIMUM_SIZE,
        list: []
      }
    case types.NUMBER_OF_GROUPS:
      return {
        ...state,
        option: types.NUMBER_OF_GROUPS,
        list: []
      }
    case types.CREATE_GROUP:
      if (state.option === types.MINIMUM_SIZE) {
        if (checkGroupSize(action.payload.people, state.number)) {
          const shuffledPeople = shuffleArray(action.payload.people)
          const groups = chunkArrayBySize(shuffledPeople, state.number)
          return {
            ...state,
            list: groups
          }
        }
      }
      if (state.option === types.NUMBER_OF_GROUPS) {
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

export const input = (state = { value: '' }, action) => {
  switch (action.type) {
    case types.UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.payload.value
      }
    default:
      return state
  }
}

const lunchReducer = combineReducers({
  people,
  group,
  input
})

export const getPeople = state => state.lunch.people
export const getGroupOptionCount = state => state.lunch.group.number
export const getGroupOption = state => state.lunch.group.option
export const getGroup = state => state.lunch.group.list
export const getInputValue = state => state.lunch.input.value

export default lunchReducer
