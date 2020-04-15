import React from 'react';
import PropTypes from 'prop-types';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function OwnerControls({player, isComplete, isStarted, startQuiz, nextQuestion, showAnswer}) {
	return (
		<React.Fragment>
			{player ? (
				<div className="flex flex-row justify-center items-center py-2">
					{ isComplete || !isStarted ? <CustomButton label="Start Quiz" clickAction={() => startQuiz()} faIcon={faArrowRight} /> : '' }
					{ !isComplete && showAnswer ? <CustomButton label="Next Question" clickAction={() => nextQuestion()} faIcon={faArrowRight} /> : '' }
				</div>) : '' }
		</React.Fragment>
	);
}

OwnerControls.propTypes = {
	player: PropTypes.object,
	answer: PropTypes.object,
	activeQuestion: PropTypes.object,
	startQuiz: PropTypes.func,
	isComplete: PropTypes.bool,
	isStarted: PropTypes.bool,
	nextQuestion: PropTypes.func,
	showAnswer: PropTypes.bool
};

export default OwnerControls;
