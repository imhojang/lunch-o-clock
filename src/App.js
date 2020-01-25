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
import InputContainer from './components/InputContainer';
import CreateGroup from './components/CreateGroup';
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
        <h1>Lunch</h1>

        <InputContainer addToList={addPerson} list={people} />

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List items={people} handleDelete={deletePerson} />
        )}

        <CreateGroup people={people} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
