import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../Counter'
import './CreateGroup.css'
import { MINIMUM_SIZE, NUMBER_OF_GROUPS } from '../../modules/lunch'

const CreateGroup = ({
  people,
  groupOptionCount,
  incrementGroupOptionCount,
  decrementGroupOptionCount,
  updateGroupOptionCount,
  setGroupOptionToMinimumSize,
  setGroupOptionToNumberOfGroups,
  createGroup,
  groupOption
}) => {
  const groupOptionCounterProps = {
    count: groupOptionCount,
    increment: incrementGroupOptionCount,
    decrement: decrementGroupOptionCount,
    updateCount: updateGroupOptionCount
  }

  return (
    <div className='create-group-container no-select'>
      <button
        className={
          groupOption === NUMBER_OF_GROUPS
            ? 'active-button option'
            : 'inactive-button option'
        }
        onClick={setGroupOptionToNumberOfGroups}
      >
        Number of Groups
      </button>
      <button
        className={
          groupOption === MINIMUM_SIZE
            ? 'active-button option'
            : 'inactive-button option'
        }
        onClick={setGroupOptionToMinimumSize}
      >
        Minimum Group Size
      </button>
      <Counter className='group-number-counter' {...groupOptionCounterProps} />
      <button
        className='create-group-button'
        onClick={() => createGroup(people)}
      >
        Let's Group Up!
      </button>
    </div>
  )
}

CreateGroup.propTypes = {
  people: PropTypes.array.isRequired,
  groupOptionCount: PropTypes.number.isRequired,
  incrementGroupOptionCount: PropTypes.func.isRequired,
  decrementGroupOptionCount: PropTypes.func.isRequired,
  updateGroupOptionCount: PropTypes.func.isRequired,
  setGroupOptionToMinimumSize: PropTypes.func.isRequired,
  setGroupOptionToNumberOfGroups: PropTypes.func.isRequired,
  createGroup: PropTypes.func.isRequired,
  groupOption: PropTypes.string.isRequired
}

export default CreateGroup
