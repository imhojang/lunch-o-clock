import React from 'react'
import { mount, shallow } from 'enzyme'
import Input from './Input'

describe('Input structure', () => {
  let input

  it('renders correctly', () => {
    input = shallow(<Input />)
  })

  it('matches snapshot', () => {
    expect(input).toMatchSnapshot()
  })

  it('renders form element correctly', () => {
    expect(input.find('form')).toHaveLength(1)
  })

  it('renders input element correctly', () => {
    expect(input.find('input')).toHaveLength(1)
  })
})

describe('Input behavior', () => {
  let input
  let value
  let handleSubmit
  let handleChange

  beforeEach(() => {
    value = 'test'
    handleSubmit = jest.fn()
    handleChange = jest.fn()
    input = mount(
      <Input
        value={value}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )
  })

  it('props are passed down correctly', () => {
    expect(input.props().value).toBe(value)
    expect(input.props().handleChange).toBe(handleChange)
    expect(input.props().handleSubmit).toBe(handleSubmit)
  })

  it('form submission calls handleSubmit correctly', () => {
    const form = input.find('form')
    form.simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })

  it('on input change calls handleChange correctly', () => {
    const inputElem = input.find('input')
    inputElem.simulate('change', { value: 'a' })
    expect(handleChange).toHaveBeenCalled()
  })
})
