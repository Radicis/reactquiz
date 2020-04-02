import React, {useContext, useEffect} from 'react';
import {Context} from '../store/Store';

import Answer from '../components/Answer/Answer';
import Question from '../components/Question/Question';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';

function QuestionContainer() {
	const [state] = useContext(Context);
	const {showAnswer, activeQuestion, showWaiting} = state;

	useEffect(() => {
		console.log('Question render');
	}, [showAnswer, activeQuestion, showWaiting]);

	return (
		<section className="flex flex-grow flex-col">
			<div className="flex flex-grow justify-center items-center">
				{activeQuestion ?
					<Question questionType={activeQuestion.type} questionContent={activeQuestion.content}/> :
					<div>No Question Ready</div>}
			</div>
			{activeQuestion ?
				<div className="flex justify-center items-center border bg-gray-100">
					{showWaiting ? <WaitingForPlayers/> : ''}
					{showAnswer ? <Answer answerType={activeQuestion.answerType}/> : ''}
				</div> : ''}
		</section>);
}

export default QuestionContainer;
