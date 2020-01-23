import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    addToList: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  };

  isDuplicateName(name) {
    const people = this.props.list;
    let isDuplicate = false;

    people.forEach(person => {
      if (person.name.toLowerCase() === name.toLowerCase()) {
        return (isDuplicate = true);
      }
    });

    return isDuplicate;
  }

  removeExtraWhiteSpace(str) {
    return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const currentValue = this.removeExtraWhiteSpace(this.state.value);

    if (this.isDuplicateName(currentValue)) {
      alert(`${currentValue} already exists! Please type in a different name!`);
    } else {
      const addPerson = this.props.addToList;
      addPerson(currentValue);
    }

    this.setState({ value: '' });
    e.preventDefault();
  }

  render() {
    return (
      <Input
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

export default InputContainer;
