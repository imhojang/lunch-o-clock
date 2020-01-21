import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPeople, getPeople } from './modules/lunch';
import List from './components/List';
import './App.css';

const mapDispatchToProps = {
  fetchPeople,
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
    console.log(this.props);
    const { people } = this.props;

    return (
      <div className='container'>
        <h1>Lunch</h1>
        <List items={people} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
