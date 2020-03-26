import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import io from 'socket.io-client';

import { port, host } from '../config';

const newSocket = io(`http://${host}:${port}`);

const initialState = {
	loading: false,
	connected: false,
	showPlayers: true,
	showAnswer: false,
	error: null,
	questions: [],
	players: [],
	activeQuestion: null,
	socket: newSocket
};

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
	const [state, dispatch] = useReducer(
		Reducer,
		initialState,
		initial => initial
	);
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	);
};

export const Context = createContext(initialState);
export default Store;
