import React from 'react';
import Counter from './Counter';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { groupSize: 2 };
    this.incrementGroupSize = this.incrementGroupSize.bind(this);
    this.decrementGroupSize = this.decrementGroupSize.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }

  createGroup() {
    const numberOfPeople = this.props.people.length;
    const { groupSize } = this.state;
    const limit = numberOfPeople - 2;

    if (groupSize < 2) {
      alert('Cannot create groups of size smaller than 2');
    } else if (numberOfPeople % groupSize === 1) {
      alert(
        `One person will be left out with current group size: ${groupSize}. \nPlease opt for a different number!`
      );
    } else if (limit <= groupSize && limit < 2) {
      alert('At least 4 people are required to create groups.');
    } else if (limit < groupSize) {
      alert(`Cannot create groups of size bigger than ${limit}.`);
    }
  }

  incrementGroupSize() {
    this.setState({ groupSize: ++this.state.groupSize });
  }

  decrementGroupSize() {
    if (this.state.groupSize > 2) {
      this.setState({ groupSize: --this.state.groupSize });
    } else {
      alert('Groups cannot be smaller than 2');
    }
  }

  render() {
    const { groupSize } = this.state;

    return (
      <div>
        <Counter
          count={groupSize}
          increment={this.incrementGroupSize}
          decrement={this.decrementGroupSize}
        />
        <button onClick={this.createGroup}>Create Group</button>
      </div>
    );
  }
}

export default CreateGroup;
