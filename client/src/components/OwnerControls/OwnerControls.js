import React from 'react';
import PropTypes from 'prop-types';

function OwnerControls({player, answer, activeQuestion, startQuiz, nextQuestion, getAnswer}) {
	return (
		<div>
			{player ? (<div className="flex flex-row justify-center items-center border bg-gray-100 py-2">
				<button className="border p-4 font-semibold mx-4" onClick={() => startQuiz()}>Start</button>
				{activeQuestion && activeQuestion ?
					<button className=" border p-4 font-semibold mx-4" onClick={() => getAnswer()}>Get
						Answer</button> : ''}
				{ activeQuestion && answer ?
					<button className="border p-4 font-semibold mx-4" onClick={() => nextQuestion()}>Next
						Question</button> : ''}
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
