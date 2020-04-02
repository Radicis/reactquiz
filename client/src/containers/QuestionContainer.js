import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
	const [state] = useContext(Context);
	const {activeQuestion} = state;

	return (
		<section className="flex flex-grow flex-col">
			<div className="flex flex-grow justify-center items-center">
				{activeQuestion ?
					<Question questionType={activeQuestion.type} questionContent={activeQuestion.content}/> :
					<div>No Question Ready</div>}
			</div>
		</section>);
}

export default QuestionContainer;
