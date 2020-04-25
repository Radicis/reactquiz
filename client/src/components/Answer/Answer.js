import React from 'react';
import PropTypes from 'prop-types';
import upDownTransition from '../../hooks/upDownTransition';
import { animated } from 'react-spring';

function Answer({ show, answer, isCorrect = false }) {
  const transition = upDownTransition(show);
  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className={`flex justify-center ${
                isCorrect ? 'correct' : 'wrong'
              }`}
            >
              <span className="font-light pr-2">Answer:</span> {answer}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

Answer.propTypes = {
  answer: PropTypes.string,
  isCorrect: PropTypes.bool,
  show: PropTypes.bool
};

export default Answer;
