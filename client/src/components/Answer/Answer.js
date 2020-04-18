import React from 'react';
import PropTypes from 'prop-types';

function Answer({ answer }) {
  return (
    <div>
      <div>{answer}</div>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string
};

export default Answer;
