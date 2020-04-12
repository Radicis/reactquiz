import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons';


function OwnerControls({player, answer, activeQuestion, startQuiz, nextQuestion, getAnswer}) {
	return (
		<div>
			{player ? (<div className="flex flex-row justify-center items-center py-2">
				<button className="btn" onClick={() => startQuiz()}><span>Start</span> <FontAwesomeIcon icon={faArrowRight} /></button>
				{activeQuestion && activeQuestion ?
					<button className=" btn" onClick={() => getAnswer()}><span>Get
						Answer</span> <FontAwesomeIcon icon={faQuestion} /></button> : ''}
				{ activeQuestion && answer ?
					<button className="btn" onClick={() => nextQuestion()}><span>Next
						Question</span><FontAwesomeIcon icon={faChevronRight} /></button> : ''}
			</div>) : ''}
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
