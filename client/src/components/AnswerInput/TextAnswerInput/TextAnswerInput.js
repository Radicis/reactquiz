import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../../common/CustomInput/CustomInput';

function TextAnswerInput({ setAnswer }) {
  const [answer, setTempAnswer] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setTempAnswer(value);
  }

  return (
    <form className="flex flex-grow" onSubmit={() => setAnswer(answer)}>
      <CustomInput handleChange={handleChange} placeHolder="Type your answer" />
    </form>
  );
}

TextAnswerInput.propTypes = {
  answer: PropTypes.bool,
  setAnswer: PropTypes.func
};

export default TextAnswerInput;
