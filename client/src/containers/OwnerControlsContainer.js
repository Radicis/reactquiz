import React, {useContext} from 'react';
import {Context} from '../store/Store';

import OwnerControls from '../components/OwnerControls/OwnerControls';

function OwnerControlsContainer() {
	const [state] = useContext(Context);
	const {socket, player, answer, activeQuestion, quizIsActive} = state;

	const startQuiz = () => {
		// Emit the set name event on the socket
		socket.emit('start-quiz');
	};

	const getAnswer = () => {
		// Emit the set name event on the socket
		socket.emit('get-answer');
	};

	const nextQuestion = () => {
		// Emit the set name event on the socket
		socket.emit('next-question');
	};

	return <OwnerControls player={player} activeQuestion={activeQuestion} answer={answer}
						  quizIsActive={quizIsActive} startQuiz={startQuiz} getAnswer={getAnswer}
						  nextQuestion={nextQuestion}/>;
}

export default OwnerControlsContainer;
