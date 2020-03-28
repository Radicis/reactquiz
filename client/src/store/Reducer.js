/* eslint-disable no-case-declarations */
const Reducer = (state, action) => {
	switch (action.type) {
	case 'START_QUIZ':
		return {
			...state,
			showAnswer: false,
			showWaiting: false,
		};
	case 'SET_ACTIVE_QUESTION':
		return {
			...state,
			activeQuestion: action.payload
		};
	case 'SET_SHOW_ANSWER':
		return {
			...state,
			showAnswer: true,
			showWaiting: false
		};
	case 'SET_SHOW_WAITING':
		return {
			...state,
			showAnswer: false,
			showWaiting: true
		};
	case 'SET_PLAYER':
		return {
			...state,
			player: action.payload
		};
	case 'SET_PLAYERS':
		return {
			...state,
			players: action.payload
		};
	case 'SET_LOADING':
		return {
			...state,
			loading: action.payload
		};
	case 'SET_CONNECTED':
		return {
			...state,
			error: false,
			connected: true
		};
	case 'SET_ERROR':
		return {
			...state,
			error: action.payload,
			loading: action.payload ? false : state.loading
		};
	default:
		return state;
	}
};

export default Reducer;
