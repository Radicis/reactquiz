/* eslint-disable no-case-declarations */

const toggleAnswerViews = (state, type) => {
  const values = {
    showAnswer: false,
    showWaiting: false,
    showReady: false,
    showAnswerInput: false,
    showCountdown: false
  };
  switch (type) {
    case 'showCountdown':
      return {
        ...state,
        ...values,
        showCountdown: true
      };
    case 'showAnswer':
      return {
        ...state,
        ...values,
        showAnswer: true
      };
    case 'showWaiting':
      return {
        ...state,
        ...values,
        showWaiting: true
      };
    case 'showReady':
      return {
        ...state,
        ...values,
        showReady: true
      };
    case 'showAnswerInput':
      return {
        ...state,
        ...values,
        showAnswerInput: true
      };
    default:
      return {
        ...state,
        values
      };
  }
};

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
    case 'SET_PLAYER_COMPLETE':
      return {
        ...state,
        showAnswer: false,
        activeQuestion: null,
        showPlayers: true,
        showWaiting: true
      };
    case 'SET_QUIZ_COMPLETE':
      return {
        ...state,
        showAnswer: false,
        activeQuestion: null,
        showPlayers: true,
        showWaiting: false,
        isComplete: true
      };
    case 'SET_ACTIVE_QUESTION':
      return {
        ...state,
        activeQuestion: action.payload,
        showAnswer: false,
        showAnswerInput: true,
        questionStartTime: new Date()
      };
    case 'SET_COUNTDOWN':
      return toggleAnswerViews(state, 'showCountdown');
    case 'SET_SHOW_WAITING':
      return toggleAnswerViews(state, 'showWaiting');
    case 'SHOW_ANSWER':
      return toggleAnswerViews(state, 'showAnswer');
    case 'SET_SHOW_ANSWER_INPUT':
      return toggleAnswerViews(state, 'showAnswerInput');
    case 'SET_WAITING':
      return toggleAnswerViews(state, 'showWaiting');
    case 'SET_SHOW_READY':
      return toggleAnswerViews(state, 'showReady');
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.payload
      };
    case 'SET_PLAYER_ANSWER':
      return {
        ...state,
        playerAnswer: action.payload,
        showWaiting: true
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
