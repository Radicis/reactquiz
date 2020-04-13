import React from 'react';
import PropTypes from 'prop-types';

function TextAnswerInput({setAnswer}) {

	return (
		<input type="text" onChange={setAnswer} />
	);
}

TextAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default TextAnswerInput;
