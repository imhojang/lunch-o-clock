import React from 'react'
import { shallow, mount } from 'enzyme'
import List from './List'

describe('List structure', () => {
  let list
  let items

  it('should throw without items prop', () => {
    items = null
    expect(() => shallow(<List items={items} />)).toThrow()
  })

  it('renders correctly with items prop', () => {
    items = [
      { name: 'item 1', _id: 'abc' },
      { name: 'item 2', _id: 'def' }
    ]
    list = shallow(<List items={items} />)
  })

  it('matches snapshot', () => {
    expect(list).toMatchSnapshot()
  })

  it('renders an unordered list correctly', () => {
    expect(list.find('ul')).toHaveLength(1)
  })

  it('renders correct number of span element ', () => {
    expect(list.find('span')).toHaveLength(2)
  })

  it('renders correct number of list item', () => {
    expect(list.find('li')).toHaveLength(2)
  })
})

describe('List behavior', () => {
  let list
  let items
  let handleDelete

  beforeEach(() => {
    items = [{ name: 'item 1', _id: 'abc' }]
    handleDelete = jest.fn()
    list = mount(<List items={items} handleDelete={handleDelete} />)
  })

  it('props are passed down correctly', () => {
    expect(list.props().handleDelete).toBe(handleDelete)
    expect(list.props().items).toBe(items)
  })

  it('list item renders a svg that acts as a button', () => {
    const button = list.find('svg').first()
    expect(button).toBeDefined()
  })

  it('delete button clicks calls handleDelete correctly', () => {
    const button = list.find('svg').first()
    button.simulate('click')
    expect(handleDelete).toHaveBeenCalled()
  })
})
