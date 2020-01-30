import React from 'react'
import PropTypes from 'prop-types'
import CreateGroup from '../CreateGroup'
import List from '../List'
import './Group.css'
import { MINIMUM_SIZE } from '../../utils/constant'

const Group = ({
  people,
  groupOptionCount,
  incrementGroupOptionCount,
  decrementGroupOptionCount,
  updateGroupOptionCount,
  setGroupOptionToMinimumSize,
  setGroupOptionToNumberOfGroups,
  createGroup,
  groupOption,
  groupList
}) => {
  const renderGroupList = groups => {
    return groups.map((group, index) => {
      return (
        <div className='group-container' key={index}>
          <h6 className='group-number'>
            Group #{index + 1} (group of {group.length})
          </h6>
          <List items={group} />
        </div>
      )
    })
  }

  const minimumGroupSizeText = 'Minimum group size'
  const numberOfGroupsText = 'Number of groups'
  const emptyGroupListMessage = <p>Group list is empty!</p>

  const createGroupProps = {
    people,
    groupOptionCount,
    incrementGroupOptionCount,
    decrementGroupOptionCount,
    updateGroupOptionCount,
    setGroupOptionToMinimumSize,
    setGroupOptionToNumberOfGroups,
    createGroup,
    groupOption
  }

  return (
    <div className='group-component'>
      <CreateGroup {...createGroupProps} />
      <div className='group-list-container'>
        <div>
          {groupList.length
            ? renderGroupList(groupList)
            : emptyGroupListMessage}
        </div>
      </div>
      {Boolean(groupList.length) && (
        <div className='group-settings-text'>
          {groupOption === MINIMUM_SIZE
            ? minimumGroupSizeText
            : numberOfGroupsText}
          : {groupOptionCount}
        </div>
      )}
    </div>
  )
}

Group.propTypes = {
  people: PropTypes.array.isRequired,
  groupOptionCount: PropTypes.number.isRequired,
  incrementGroupOptionCount: PropTypes.func.isRequired,
  decrementGroupOptionCount: PropTypes.func.isRequired,
  updateGroupOptionCount: PropTypes.func.isRequired,
  setGroupOptionToMinimumSize: PropTypes.func.isRequired,
  setGroupOptionToNumberOfGroups: PropTypes.func.isRequired,
  createGroup: PropTypes.func.isRequired,
  groupOption: PropTypes.string.isRequired,
  groupList: PropTypes.array.isRequired
}

export default Group
