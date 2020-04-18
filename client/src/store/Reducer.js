/* eslint-disable no-case-declarations */
const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SOCKET':
      return {
        ...state,
        socket: action.payload
      };
    case 'SET_ACCENT':
      return {
        ...state,
        accentOpen: action.payload
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
        questionTime: 0,
        answer: null,
        showPlayers: true,
        showWaiting: false,
        isComplete: true
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
        questionTime: action.payload.questionTime
      };
    case 'SHOW_ANSWER':
      return {
        ...state,
        showAnswer: true,
        showWaiting: false
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
    case 'SET_PLAYERS':
      // update the player too
      const { player } = state;
      const players = action.payload;
      let updatedPlayer;
      if (player) {
        updatedPlayer = players.find((p) => p.id === player.id);
      }
      // if an updated player is found then update the player in the state
      if (updatedPlayer) {
        if (players.length === 1) {
          updatedPlayer.isOwner = true;
        }
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
