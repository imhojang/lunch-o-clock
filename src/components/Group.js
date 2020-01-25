import React from 'react';
import CreateGroup from './CreateGroup';
import List from './List';

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
    return groups.map(group => {
      return <List items={group} />;
    });
  }

  render() {
    const { people } = this.props;
    const { groups } = this.state;

    return (
      <div>
        <CreateGroup people={people} setGroups={this.setGroups} />
        {Boolean(groups.length) && this.renderGroupList(groups)}
      </div>
    );
  }
}

export default Group;
