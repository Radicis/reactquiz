/* eslint-disable no-case-declarations */
const Reducer = (state, action) => {
	switch (action.type) {
	case 'SET_SOCKET':
		return {
			...state,
			socket: action.payload
		};
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
		// update the player too
		const { player } = state;
		const players = action.payload;
		const updatedPlayer = players.find(p => p.id === player.id);
		// if an updated player is found then update the player in the state
		if (updatedPlayer) {
			return {
				...state,
				players,
				player: updatedPlayer
			};
		}
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
