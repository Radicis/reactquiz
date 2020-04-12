import React from 'react';
import PropTypes from 'prop-types';

function BoolAnswerInput({setAnswer}) {

	return (
		<div className="p-4 flex flex-row">
			<div className="btn">
				<label htmlFor="answerTrue">True
					<input type="radio" id="answerTrue" name="radio-group" onChange={() => setAnswer(true)}
					/></label>
			</div>
			<div className="btn">
				<label htmlFor="answerFalse">False
					<input type="radio" id="answerFalse" name="radio-group"  onChange={() => setAnswer(false)}
					/></label>
			</div>
		</div>
	);
}

BoolAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default BoolAnswerInput;
