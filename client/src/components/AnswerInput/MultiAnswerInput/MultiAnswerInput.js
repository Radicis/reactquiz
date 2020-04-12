import React from 'react';
import PropTypes from 'prop-types';

function MultiAnswerInput({answers, setAnswer}) {

	function renderAnswer (answer) {
		return (
			<div className="btn">
				<label htmlFor={answer}>answer
					<input type="radio" id={answer} name="radio-group" onChange={() => setAnswer(answer)}
					/></label>
			</div>
		);
	}

	return (
		<div className="p-4 flex flex-row">
			{ answers.map(renderAnswer)}
		</div>
	);
}

MultiAnswerInput.propTypes = {
	answers: PropTypes.array,
	setAnswer: PropTypes.func
};

export default MultiAnswerInput;
