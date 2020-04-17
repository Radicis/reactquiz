import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
	const [state] = useContext(Context);
	const {activeQuestion, isComplete, isStarted} = state;

	return (
		<div className="flex flex-col justify-center h-full p-4">
			{isStarted && activeQuestion ?
				(<Question questionType={activeQuestion.type} questionPath={activeQuestion.path} questionContent={activeQuestion.content}/>) : ''}
			{isStarted && isComplete ? <div className="text-2xl flex justify-center">Quiz Complete!</div> : '' }
			{!isStarted ? <div className="text-2xl flex justify-center">Ready To Start!</div> : '' }
		</div>);
}

export default QuestionContainer;
