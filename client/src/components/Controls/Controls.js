import React from 'react';
import PropTypes from 'prop-types';

import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function Controls({
  player,
  isComplete,
  isStarted,
  startQuiz,
  setPlayerReady,
  showReady
}) {
  return (
    <React.Fragment>
      {player && player.isActive ? (
        <div className="flex flex-row items-center justify-center">
          {!player.isOwner && showReady ? (
            <CustomButton
              label="Ready"
              clickAction={setPlayerReady}
              faIcon={faCheck}
            />
          ) : (
            ''
          )}
          {isComplete && player.isOwner && (isComplete || !isStarted) ? (
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

Controls.propTypes = {
  player: PropTypes.object,
  startQuiz: PropTypes.func,
  setPlayerReady: PropTypes.func,
  showReady: PropTypes.bool,
  isComplete: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  isStarted: PropTypes.bool
};

export default Controls;
