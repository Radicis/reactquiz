import React from 'react';
import PropTypes from 'prop-types';

function Answer({ answer, isCorrect = false }) {
  return (
    <div className={`flex justify-center ${isCorrect ? 'correct' : 'wrong'}`}>
      <span className="font-light pr-2">Answer:</span> {answer}
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string,
  isCorrect: PropTypes.bool
};

export default Answer;
