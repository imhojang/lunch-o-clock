import React from 'react';
import Counter from '../Counter';
import './CreateGroup.css';
import { MINIMUM_SIZE, NUMBER_OF_GROUPS } from '../../modules/lunch';
import { shuffleArray, chunkArray } from '../../utils/index';

const CreateGroup = ({
  people,
  setGroups,
  groupOptionCount,
  incrementGroupOptionCount,
  decrementGroupOptionCount,
  updateGroupOptionCount,
  setGroupOptionToMinimumSize,
  setGroupOptionToNumberOfGroups,
  createGroup,
  groupOption,
}) => {


  const groupOptionCounterProps = {
    count: groupOptionCount,
    increment: incrementGroupOptionCount,
    decrement: decrementGroupOptionCount,
    updateCount: updateGroupOptionCount,
  };

  return (
    <div className='create-group-container no-select'>
      <button
        className={
          groupOption === NUMBER_OF_GROUPS ? 'active-button option' : 'inactive-button option'
        }
        onClick={setGroupOptionToNumberOfGroups}
      >
        Number of Groups
      </button>
      <button
        className={
          groupOption === MINIMUM_SIZE ? 'active-button option' : 'inactive-button option'
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
  );
};

export default CreateGroup;
