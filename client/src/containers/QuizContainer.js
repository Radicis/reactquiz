import React, { useContext } from 'react';
import { Context } from '../store/Store';

import TimerContainer from './TImerContainer';
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import PlayersContainer from './PlayersContainer';
import OwnerControlsContainer from './OwnerControlsContainer';

function QuizContainer() {
	const [state] = useContext(Context);
	const { player } = state;

	return (
		<React.Fragment>
			{ player && player.active ? <div className="flex flex-col justify-center h-full p-4">
				<TimerContainer />
				<div className="flex-2 my-2">
					<QuestionContainer />
				</div>
				<div className="flex flex-1 justify-center mb-2">
					<AnswerContainer />
					<PlayersContainer />
				</div>
				<OwnerControlsContainer />
			</div> : '' }
		</React.Fragment>
	);
}

export default QuizContainer;
