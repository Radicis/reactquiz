import React from 'react';
import PropTypes from 'prop-types';

function Answer({ answer }) {
  return (
    <div className="flex justify-center">
      <span className="font-light pr-2">Answer:</span> {answer}
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string
};

export default Answer;
