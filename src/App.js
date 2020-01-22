import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPeople, getPeople, addPerson } from './modules/lunch';
import List from './components/List';
import './App.css';

const mapDispatchToProps = {
  fetchPeople,
  addPerson,
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
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    people: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { fetchPeople } = this.props;
    fetchPeople();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  isDuplicateName(name) {
    const { people } = this.props;
    let isDuplicate = false;

    people.forEach(person => {
      if (person.name.toLowerCase() === name.toLowerCase()) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  removeExtraWhiteSpaces(str) {
    return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  }

  handleSubmit(e) {
    const currentValue = this.removeExtraWhiteSpaces(this.state.value);
    
    if (this.isDuplicateName(currentValue)) {
      alert(`${currentValue} already exists! Please type in a different name!`);
    } else {
      const { addPerson } = this.props;
      addPerson(currentValue);
    }
    
    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    const { people, isLoading, hasError } = this.props;

    return (
      <div className='container'>
        <h1>Lunch</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {isLoading ? <div>Loading...</div> : <List items={people} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
