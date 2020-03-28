import React, {useContext, useEffect} from 'react';
import {Context} from '../store/Store';

function SocketContainer() {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useContext(Context);

	const { socket } = state;

	useEffect(() => {
		console.log('Init Socket');

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

		socket.on('error', err => {
			console.log(`Error: ${err}`);
			dispatch({
				type: 'SET_ERROR',
				payload: err
			});
		});

		socket.on('start-quiz', () => {
			console.log('Starting Quiz');
			dispatch({
				type: 'START_QUIZ'
			});
		});

		socket.on('init-player', player => {
			dispatch({
				type: 'SET_PLAYER',
				payload: player
			});
			console.log('Player created');
			console.log(player);
		});

		socket.on('players', data => {
			dispatch({
				type: 'SET_PLAYERS',
				payload: data
			});
		});
	}, [dispatch]); // Pass in array here to prevent re-render
	return (<div/>);
}

export default SocketContainer;
