import React from 'react';
import PropTypes from 'prop-types';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function OwnerControls({
  player,
  isComplete,
  isStarted,
  startQuiz,
  nextQuestion,
  showAnswer,
  alwaysShow
}) {
  return (
    <React.Fragment>
      {(player && player.isActive && player.isOwner) || alwaysShow ? (
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
          {!isComplete && showAnswer ? (
            <CustomButton
              label="Next"
              clickAction={() => nextQuestion()}
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
  answer: PropTypes.object,
  activeQuestion: PropTypes.object,
  startQuiz: PropTypes.func,
  isComplete: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  isStarted: PropTypes.bool,
  nextQuestion: PropTypes.func,
  showAnswer: PropTypes.bool
};

export default OwnerControls;
