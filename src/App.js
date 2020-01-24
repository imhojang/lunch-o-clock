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
  constructor(props) {
    super(props);

    this.state = { value: 2 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }
  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { fetchPeople } = this.props;
    fetchPeople();
  }

  increment() {
    this.setState({ value: ++this.state.value });
  }

  decrement() {
    if (this.state.value > 2) {
      this.setState({ value: --this.state.value });
    } else {
      alert('Groups cannot be smaller than 2');
    }
  }

  createGroup() {
    let limit = this.props.people.length - 2;
    if (this.state.value < 2) {
      alert('Cannot create groups smaller than 2');
    } else if (limit <= this.state.value && limit < 2) {
      alert('At least 4 people are required to create groups');
    } else if (limit < this.state.value) {
      alert(`Cannot create groups greater than ${limit}`);
    }
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

        <button onClick={this.decrement}>-</button>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <br />
        <button onClick={this.createGroup}>Create Group</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
