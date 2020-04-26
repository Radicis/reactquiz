import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/CustomButton/CustomButton';

function BoolAnswerInput({ setAnswer }) {
  return (
    <div className="flex flex-col justify-center">
      <CustomButton label="True" clickAction={() => setAnswer(true)} />
      <CustomButton label="False" clickAction={() => setAnswer(false)} />
    </div>
  );
}

BoolAnswerInput.propTypes = {
  answer: PropTypes.bool,
  setAnswer: PropTypes.func
};

export default BoolAnswerInput;
