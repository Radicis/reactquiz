import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/CustomButton/CustomButton';

function BoolAnswerInput({ setAnswer }) {
  return (
    <div className="p-4 flex flex-row">
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
