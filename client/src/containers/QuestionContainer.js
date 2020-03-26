import React, {useEffect, useContext} from 'react';
import {Context} from '../store/Store';

import Answer from '../components/Answer/Answer';
import Question from '../components/Question/Question';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Players from '../components/Players/Players';

function QuestionContainer() {
	const [state, dispatch] = useContext(Context);
	const {error, socket, showAnswer, activeQuestion, showPlayers, showWaiting, players} = state;

	useEffect(() => {
		socket.on('connect', () => {
			dispatch({
				type: 'SET_CONNECTED'
			});
		});
		socket.on('connect_error', () => {
			console.log('Cannot connect');
			dispatch({
				type: 'SET_ERROR',
				payload: 'Connection Error'
			});
		});
		socket.on('event', (data) => console.log(data));
		socket.on('players', data => dispatch({
			type: 'SET_PLAYERS',
			payload: data
		}));
	});

	return (
		<div>
			{error ? <main className="m-4 flex flex-grow flex-col">{error}</main> :
				<main className="m-4 flex flex-grow flex-col">
					<div className="flex flex-grow justify-center items-center">
						{activeQuestion ? <Question question={activeQuestion}/> : <div>No Question Ready</div>}
					</div>
					<div className="h-40 flex justify-center items-center border bg-gray-100">
						{showPlayers ? <Players players={players}/> : ''}
						{showWaiting ? <WaitingForPlayers/> : ''}
						{showAnswer ? <Answer/> : ''}
					</div>
				</main>}
		</div>
	);
}

export default QuestionContainer;
