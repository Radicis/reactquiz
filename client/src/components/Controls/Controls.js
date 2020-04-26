import React from 'react';
import PropTypes from 'prop-types';

import {
  faArrowRight,
  faCheck,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function Controls({
  player,
  isComplete,
  isStarted,
  startQuiz,
  setPlayerReady,
  showLinkModal,
  showReady
}) {
  return (
    <React.Fragment>
      {player && player.isActive ? (
        <div className="flex flex-row items-center justify-center flex-grow">
          {!player.isOwner && showReady ? (
            <CustomButton
              label="Ready"
              clickAction={setPlayerReady}
              faIcon={faCheck}
            />
          ) : (
            ''
          )}
          {(!isStarted || isComplete) &&
          player.isOwner &&
          (!isComplete || !isStarted) ? (
            <div className="flex flex-row justify-around flex-grow">
              <CustomButton
                label="Start"
                clickAction={startQuiz}
                faIcon={faArrowRight}
              />
              <CustomButton
                label="Link"
                clickAction={showLinkModal}
                faIcon={faLink}
              />
            </div>
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
  showLinkModal: PropTypes.func,
  showReady: PropTypes.bool,
  isComplete: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  isStarted: PropTypes.bool
};

export default Controls;
