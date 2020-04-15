import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Answer from '../components/Answer/Answer';
import AnswerInput from '../components/AnswerInput/AnswerInput';
// import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function AnswerContainer() {
	const [state] = useContext(Context);
	const {showAnswer, activeQuestion, socket, showPlayers} = state;

	const submitAnswer = answer => {
		socket.emit('set-player-answer-for-active-question', {answer});
	};

	return (
		<section>
			{!showPlayers && activeQuestion ?
				<div className="flex justify-center items-center">
					{!showAnswer ?
						<AnswerInput submitAnswer={submitAnswer} answerType={activeQuestion.answerType}/> : ''}
					{/*{playerAnswer && showWaiting ? <WaitingForPlayers/> : ''}*/}
					{showAnswer ? <Answer answerType={activeQuestion.answerType}/> : ''}
				</div> : ''}
		</section>);
}

export default AnswerContainer;
