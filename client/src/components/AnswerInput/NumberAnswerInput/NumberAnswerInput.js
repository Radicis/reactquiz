import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../../common/CustomInput/CustomInput';
import CustomButton from '../../common/CustomButton/CustomButton';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function NumberAnswerInput({ setAnswer }) {
  const [answer, setTempAnswer] = useState('');

  function handleChange(e) {
    const re = /^[0-9\b]+/;
    const { value } = e.target;
    if (value === '' || re.test(value)) {
      setTempAnswer(value);
    }
  }

  return (
    <form className="flex flex-grow" onSubmit={() => setAnswer(answer)}>
      <CustomInput
        type="number"
        handleChange={handleChange}
        placeHolder="Set your answer"
      />
      <CustomButton
        label="OK"
        disabled={!answer}
        clickAction={() => setAnswer(answer)}
        faIcon={faCheck}
      />
    </form>
  );
}

NumberAnswerInput.propTypes = {
  answer: PropTypes.bool,
  setAnswer: PropTypes.func
};

export default NumberAnswerInput;
