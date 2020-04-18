import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../../common/CustomInput/CustomInput';

function NumberAnswerInput({ setAnswer }) {
  const [answer, setTempAnswer] = useState('');

  function handleChange(e) {
    const { value } = e.target;
    setTempAnswer(value);
  }

  return (
    <form className="flex flex-grow" onSubmit={() => setAnswer(answer)}>
      <CustomInput
        type="number"
        handleChange={handleChange}
        placeHolder="Set your answer"
      />
    </form>
  );
}

NumberAnswerInput.propTypes = {
  answer: PropTypes.bool,
  setAnswer: PropTypes.func
};

export default NumberAnswerInput;
