import React from 'react'
import { mount, shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter structure', () => {
  let counter
  let count = 2
  let decrement = jest.fn()
  let increment = jest.fn()
  let props = { count, decrement, increment }

  it('renders correctly', () => {
    counter = shallow(<Counter {...props} />)
  })

  it('matches snapshot', () => {
    expect(counter).toMatchSnapshot()
  })

  it('renders increment button correctly', () => {
    const incrementButton = counter.find('.increment-button')
    expect(incrementButton).toBeDefined()
  })

  it('renders decrement button correctly', () => {
    const decrementButton = counter.find('.decrement-button')
    expect(decrementButton).toBeDefined()
  })

  it('renders count display correctly', () => {
    const countDisplay = counter.find('.count')
    expect(countDisplay).toBeDefined()
  })
})

describe('Counter behavior', () => {
  let counter
  let count
  let decrement
  let increment

  beforeEach(() => {
    count = 3
    decrement = jest.fn()
    increment = jest.fn()
    let props = { count, decrement, increment }
    counter = mount(<Counter {...props} />)
  })

  it('props are passed down correctly', () => {
    expect(counter.props().count).toEqual(3)
    expect(counter.props().decrement).toBe(decrement)
    expect(counter.props().increment).toBe(increment)
  })

  it('check if decrement button calls decrement correctly', () => {
    const decrementButton = counter.find('.decrement-button')
    decrementButton.simulate('click')
    expect(decrement).toHaveBeenCalled()
  })

  it('check if increment button calls increment correctly', () => {
    const incrementButton = counter.find('.increment-button')
    incrementButton.simulate('click')
    expect(increment).toHaveBeenCalled()
  })
})
