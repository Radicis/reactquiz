import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
	const [state] = useContext(Context);
	const {activeQuestion} = state;

	return (
		<section className="flex flex-grow flex-col justify-center shadow border rounded-lg items-center m-4 items-stretch">
			{activeQuestion ?
				<Question questionType={activeQuestion.type} questionPath={activeQuestion.path} questionContent={activeQuestion.content}/> :
				<div>No Question Ready</div>}
		</section>);
}

export default QuestionContainer;
