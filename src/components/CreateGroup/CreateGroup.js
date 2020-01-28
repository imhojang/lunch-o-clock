import React from 'react';
import Counter from '../Counter';
import './CreateGroup.css';
import { shuffleArray } from '../../utils/index';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { groupSize: 2 };
    this.incrementGroupSize = this.incrementGroupSize.bind(this);
    this.decrementGroupSize = this.decrementGroupSize.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }

  checkGroupSize() {
    const { groupSize } = this.state;
    const { people } = this.props;
    const numberOfPeople = people.length;
    const limit = numberOfPeople - 2;
    let result = false;

    if (groupSize < 2) {
      alert('Cannot create groups of size smaller than 2.');
      return false;
    } else if (numberOfPeople % groupSize === 1) {
      return alert(
        `One person will be left out with current group size: ${groupSize}. \nPlease opt for a different group size!`
      );
    } else if (limit <= groupSize && limit < 2) {
      return alert('At least 4 people are required to create groups.');
    } else if (limit < groupSize) {
      return alert(`Cannot create groups of size bigger than ${limit}.`);
    } else {
      result = true;
    }
    return result;
  }

  chunkArray(array, size) {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
      chunks.push(array.slice(index, index + size));
      index += size;
    }

    return chunks;
  }

  createGroup() {
    const { people } = this.props;
    const { groupSize } = this.state;

    if (this.checkGroupSize()) {
      const shuffledPeople = shuffleArray(people);
      const groups = this.chunkArray(shuffledPeople, groupSize);
      this.props.setGroups(groups);
    }
  }

  incrementGroupSize() {
    this.setState({ groupSize: this.state.groupSize + 1 });
  }

  decrementGroupSize() {
    if (this.state.groupSize > 2) {
      this.setState({ groupSize: this.state.groupSize - 1 });
    } else {
      alert('Groups cannot be smaller than 2');
    }
  }

  render() {
    const { groupSize } = this.state;

    return (
      <div className='create-group-container'>
        <div>Select Group Size</div>
        <Counter
          count={groupSize}
          increment={this.incrementGroupSize}
          decrement={this.decrementGroupSize}
        />
        <button className='create-group-button' onClick={this.createGroup}>
          Let's Group Up!
        </button>
      </div>
    );
  }
}

export default CreateGroup;
