import React from 'react';
import PropTypes from 'prop-types';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function OwnerControls({ player, isComplete, isStarted, startQuiz }) {
  return (
    <React.Fragment>
      {player && player.isActive && player.isOwner ? (
        <div className="absolute flex flex-row justify-center items-center py-2 bottom-0 z-40">
          {isComplete || !isStarted ? (
            <CustomButton
              label="Start"
              clickAction={() => startQuiz()}
              faIcon={faArrowRight}
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

OwnerControls.propTypes = {
  player: PropTypes.object,
  startQuiz: PropTypes.func,
  isComplete: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  isStarted: PropTypes.bool
};

export default OwnerControls;
