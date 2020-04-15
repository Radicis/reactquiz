import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Answer from '../components/Answer/Answer';
import AnswerInput from '../components/AnswerInput/AnswerInput';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function AnswerContainer() {
	const [state, dispatch] = useContext(Context);
	const {showAnswer, activeQuestion, socket, showPlayers, showWaiting} = state;

	const submitAnswer = answer => {
		dispatch({
			type: 'SET_WAITING'
		});
		socket.emit('set-player-answer-for-active-question', {answer});
	};

	return (
		<React.Fragment>
			{!showPlayers && activeQuestion && !showWaiting ?
				<div className="flex justify-center items-center flex-grow">
					{!showAnswer ?
						<AnswerInput submitAnswer={submitAnswer} answerType={activeQuestion.answerType} choices={activeQuestion.choices}/> : ''}
					{showAnswer ? <Answer answer={activeQuestion.answer.toString()}/> : ''}
				</div> : ''}
			{showWaiting ? <WaitingForPlayers/> : ''}
		</React.Fragment>
	);
}

export default AnswerContainer;
