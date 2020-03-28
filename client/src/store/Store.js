import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
	loading: false,
	connected: false,
	error: null,
	players: [],
	activeQuestion: null,
	answer: null
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
