import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/CustomButton/CustomButton';

function MultiAnswerInput({answers, setAnswer}) {

	function renderAnswer (answer) {
		return (
			<CustomButton label={answer} clickAction={setAnswer} />
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
