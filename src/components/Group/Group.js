import React from 'react';
import CreateGroup from '../CreateGroup';
import List from '../List';
import './Group.css';

class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = { groups: [] };
    this.setGroups = this.setGroups.bind(this);
  }

  setGroups(groups) {
    this.setState({ groups });
  }

  renderGroupList(groups) {
    return groups.map((group, index) => {
      return (
        <div className='group-container' key={index}>
          <h6 className='group-number'>Group {index + 1}</h6>
          <List items={group} />
        </div>
      );
    });
  }

  render() {
    const { people } = this.props;
    const { groups } = this.state;

    return (
      <div className='group-component'>
        <CreateGroup people={people} setGroups={this.setGroups} />
        <div className='group-list-container'>
          <div>{Boolean(groups.length) ? this.renderGroupList(groups) : <p>Looks like you have not created any groups yet...</p>}</div>
        </div>
      </div>
    );
  }
}

export default Group;
