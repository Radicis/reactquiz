import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/CustomButton/CustomButton';

function MultiAnswerInput({ choices = [], setAnswer }) {
  function renderChoice(choice) {
    return (
      <CustomButton
        key={choice}
        label={choice}
        clickAction={() => setAnswer(choice)}
      />
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {choices.map(renderChoice)}
    </div>
  );
}

MultiAnswerInput.propTypes = {
  choices: PropTypes.array,
  setAnswer: PropTypes.func
};

export default MultiAnswerInput;
