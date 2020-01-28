import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getPeople,
  fetchPeople,
  addPerson,
  deletePerson,
} from './modules/lunch';
import List from './components/List';
import InputContainer from './components/Input/InputContainer';
import Group from './components/Group';
import './App.css';

const mapDispatchToProps = {
  fetchPeople,
  addPerson,
  deletePerson,
};

const mapStateToProps = state => {
  const peopleData = getPeople(state);
  return {
    people: peopleData.list,
    isLoading: peopleData.loading,
    hasErrors: peopleData.error,
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
    const { people, isLoading, hasError, addPerson, deletePerson } = this.props;

    return (
      <div className='container'>
        <h1>It's Lunch O'Clock!</h1>
          <div className='people-container'>
            <InputContainer addToList={addPerson} list={people} />
            <div className='current-people-list-container'>
              <List items={people} handleDelete={deletePerson} />
            </div>
            <div className='total-number-people-box'>
              <span>Number of people: {people.length}</span>
            </div>
          </div>
          <div className='people-container'>
            <Group people={people} />
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
