import React from 'react';
import PropTypes from 'prop-types';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function OwnerControls({player, startQuiz}) {
	return (
		<div>
			{player ? (<div className="flex flex-row justify-center items-center py-2">
				<CustomButton label="Start Quiz" clickAction={() => startQuiz()} faIcon={faArrowRight} /></div>) : '' }
		</div>
	);
}

OwnerControls.propTypes = {
	player: PropTypes.object,
	answer: PropTypes.object,
	activeQuestion: PropTypes.object,
	startQuiz: PropTypes.func,
	nextQuestion: PropTypes.func,
	getAnswer: PropTypes.func,
};

export default OwnerControls;
