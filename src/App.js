import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getPeople,
  fetchPeople,
  addPerson,
  deletePerson,
  getGroup,
  getGroupOption,
  getGroupOptionCount,
  incrementGroupOptionCount,
  decrementGroupOptionCount,
  updateGroupOptionCount,
  setGroupOptionToMinimumSize,
  setGroupOptionToNumberOfGroups,
  createGroup,
  
} from './modules/lunch';
import List from './components/List';
import InputContainer from './components/Input/InputContainer';
import Group from './components/Group';
import './App.css';

const mapDispatchToProps = {
  fetchPeople,
  addPerson,
  deletePerson,
  incrementGroupOptionCount,
  decrementGroupOptionCount,
  updateGroupOptionCount,
  setGroupOptionToMinimumSize,
  setGroupOptionToNumberOfGroups,
  createGroup
};

const mapStateToProps = state => {
  const peopleData = getPeople(state);
  const groupOptionCount = getGroupOptionCount(state);
  const groupOption = getGroupOption(state);
  const groupList = getGroup(state);
  return {
    people: peopleData.list,
    isLoading: peopleData.loading,
    hasErrors: peopleData.error,
    groupOptionCount,
    groupOption,
    groupList,
  };
};

class App extends React.Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { fetchPeople } = this.props;
    fetchPeople();
  }

  render() {
    const {
      people,
      addPerson,
      deletePerson,
      groupOptionCount,
      incrementGroupOptionCount,
      decrementGroupOptionCount,
      updateGroupOptionCount,
      setGroupOptionToMinimumSize,
      setGroupOptionToNumberOfGroups,
      createGroup,
      groupOption,
      groupList,
    } = this.props;

    const groupProps = {
      people,
      groupOptionCount,
      incrementGroupOptionCount,
      decrementGroupOptionCount,
      updateGroupOptionCount,
      setGroupOptionToMinimumSize,
      setGroupOptionToNumberOfGroups,
      createGroup,
      groupOption,
      groupList,
    };

    const emptyListMessage = (
      <p>
        The list is empty! <br />
        Add some people to group up for lunch!
      </p>
    );
    const peopleCount = (
      <div className='total-number-people-box'>
        Number of people: {people.length}
      </div>
    );
    return (
      <div className='container'>
        <h1>It's Lunch O'Clock!</h1>

        <div className='people-container'>
          <InputContainer addToList={addPerson} list={people} />
          <div className='current-people-list-container'>
            {Boolean(people.length) ? (
              <List items={people} handleDelete={deletePerson} />
            ) : (
              emptyListMessage
            )}
          </div>
          {peopleCount}
        </div>

        <div className='people-container'>
          <Group {...groupProps} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
