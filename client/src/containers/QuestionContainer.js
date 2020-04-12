import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
	const [state] = useContext(Context);
	const {activeQuestion} = state;

	return (
		<section className="flex flex-grow flex-col justify-center shadow border rounded items-center">
			{activeQuestion ?
				<Question questionType={activeQuestion.type} questionContent={activeQuestion.content}/> :
				<div>No Question Ready</div>}
		</section>);
}

export default QuestionContainer;
