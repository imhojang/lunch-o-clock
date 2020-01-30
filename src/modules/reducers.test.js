import { people, group } from './reducers'
import * as actions from './actions'
import * as types from './actiontypes'

describe('people reducer', () => {
  it('should handle initial state', () => {
    const peopleInitialState = {
      list: [],
      loading: false,
      error: null
    }
    expect(people(undefined, {})).toEqual(peopleInitialState)
  })

  it(`should handle ${types.FETCH_PEOPLE_BEGIN}`, () => {
    const expectedState = {
      list: [],
      loading: true,
      error: null
    }
    expect(people(undefined, actions.fetchPeopleBegin())).toEqual(expectedState)
  })

  it(`should handle ${types.FETCH_PEOPLE_SUCCESS}`, () => {
    const expectedState = {
      list: [{ name: 'john' }],
      loading: false,
      error: null
    }
    const fetchedList = [{ name: 'john' }]
    expect(people(undefined, actions.fetchPeopleSuccess(fetchedList))).toEqual(expectedState)
  })

  it(`should handle ${types.FETCH_PEOPLE_FAILURE}`, () => {
    const someError = new Error('some error')
    const expectedState = {
      list: [],
      loading: false,
      error: someError
    }
    expect(people(undefined, actions.fetchPeopleFailure(someError))).toEqual(expectedState)
  })
})

describe('group reducer', () => {
  it('should handle initial state', () => {
    const groupInitialState = {
      number: 1,
      list: [],
      option: types.NUMBER_OF_GROUPS
    }
    expect(group(undefined, {})).toEqual(groupInitialState)
  })

  it(`should handle ${types.INCREMENT_GROUP_OPTION_COUNT}`, () => {
    const incrementedGroupOptionCount = group(undefined, actions.incrementGroupOptionCount()).number
    expect(incrementedGroupOptionCount).toEqual(2)
  })

  it(`should handle ${types.DECREMENT_GROUP_OPTION_COUNT}`, () => {
    const groupInitialState = {
      number: 2
    }
    const decrementedGroupOptionCount = group(groupInitialState, actions.decrementGroupOptionCount()).number
    expect(decrementedGroupOptionCount).toEqual(1)

    const decrementedCountAt1 = group(undefined, actions.decrementGroupOptionCount()).number
    expect(decrementedCountAt1).toEqual(1)
  })

  it(`should handle ${types.UPDATE_GROUP_OPTION_COUNT}`, () => {
    const updatedGroupOptionCount = group(undefined, actions.updateGroupOptionCount(10)).number
    expect(updatedGroupOptionCount).toEqual(10)
  })
})
