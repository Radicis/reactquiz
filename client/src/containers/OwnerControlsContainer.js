import React, {useContext} from 'react';
import {Context} from '../store/Store';

import OwnerControls from '../components/OwnerControls/OwnerControls';

function OwnerControlsContainer() {
	const [state] = useContext(Context);
	const {socket, player, activeQuestion, showAnswer, isStarted, isComplete} = state;

	const startQuiz = () => {
		// Emit the set name event on the socket
		socket.emit('start-quiz');
	};

	const nextQuestion = () => {
		// Emit the set name event on the socket
		socket.emit('get-next-question');
	};

	return <OwnerControls player={player} activeQuestion={activeQuestion} showAnswer={showAnswer}
		isStarted={isStarted} startQuiz={startQuiz} isComplete={isComplete}
						  nextQuestion={nextQuestion}/>;
}

export default OwnerControlsContainer;
