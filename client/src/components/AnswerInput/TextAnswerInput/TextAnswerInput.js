import React from 'react';
import PropTypes from 'prop-types';

function TextAnswerInput({setAnswer}) {

	return (
		<div className="p-4 flex flex-row">
			<input type="text" onChange={setAnswer} />
		</div>
	);
}

TextAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default TextAnswerInput;
