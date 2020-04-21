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
        showPlayers: false,
        showWaiting: false,
        isComplete: false,
        isStarted: true
      };
    case 'SET_QUIZ_COMPLETE':
      return {
        ...state,
        showAnswer: false,
        activeQuestion: null,
        answer: null,
        showPlayers: true,
        showWaiting: false,
        isComplete: true,
        winner: state.players.sort((a, b) => a.score > b.score)[0].name
      };
    case 'RESET_QUESTION':
      return {
        ...state,
        activeQuestion: null,
        questionTime: 0,
        answer: null,
        showAnswer: false
      };
    case 'SET_ACTIVE_QUESTION':
      return {
        ...state,
        activeQuestion: action.payload,
        answer: null,
        showAnswer: false,
        showPlayers: false,
        questionStartTime: new Date()
      };
    case 'SHOW_ANSWER':
      return {
        ...state,
        showAnswer: true,
        showWaiting: false,
        showPlayers: true
      };
    case 'SET_PLAYER_ANSWER':
      return {
        ...state,
        playerAnswer: action.payload,
        showWaiting: true
      };
    case 'SET_WAITING':
      return {
        ...state,
        showWaiting: true
      };
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.payload
      };
    case 'UPDATE_PLAYER':
      // Find and update the player
      const { id } = action.payload;
      const playerIndex = state.players.findIndex((p) => p.id === id);
      if (playerIndex !== -1) {
        state.players.splice(playerIndex, 1, action.payload);
      }
      return {
        ...state,
        player: action.payload,
        players: state.players
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
