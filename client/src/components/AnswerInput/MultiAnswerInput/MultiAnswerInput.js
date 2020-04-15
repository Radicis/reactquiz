import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/CustomButton/CustomButton';

function MultiAnswerInput({choices = [], setAnswer}) {

	function renderChoice (choice) {
		return (
			<CustomButton key={choice} label={choice} clickAction={() => setAnswer(choice)} />
		);
	}

	return (
		<div className="p-4 flex flex-row">
			{ choices.map(renderChoice)}
		</div>
	);
}

MultiAnswerInput.propTypes = {
	choices: PropTypes.array,
	setAnswer: PropTypes.func
};

export default MultiAnswerInput;
