import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './List';

describe('List structure', () => {
  let list;
  let items;

  beforeEach(() => {
    items = [{ name: 'item 1', _id: 'abc' }];
    list = shallow(<List items={items} />);
  });

  it('List renders an unordered list', () => {
    expect(list.find('ul')).toHaveLength(1);
  });

  it('List renders a span', () => {
    expect(list.find('span')).toHaveLength(1);
  });

  it('List renders an list item', () => {
    expect(list.find('li')).toHaveLength(1);
  });
});

describe('List behavior', () => {
  let list;
  let items;
  let handleDelete;

  beforeEach(() => {
    items = [{ name: 'item 1', _id: 'abc' }];
    handleDelete = jest.fn();
    list = mount(<List items={items} handleDelete={handleDelete} />);
  });

  it('Props are passed down correctly', () => {
    expect(list.props().handleDelete).toBe(handleDelete);
    expect(list.props().items).toBe(items);
  });

  it('List item renders a svg that acts as a button', () => {
    const button = list.find('svg').first();
    expect(button).toBeDefined();
  });

  it('Button clicks calls handleDelete', () => {
    const button = list.find('svg').first();
    button.simulate('click');
    expect(handleDelete).toHaveBeenCalled();
  });
});
