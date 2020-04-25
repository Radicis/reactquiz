const toggleAnswerViews = (state, type) => {
  const values = {
    showAnswer: false,
    showWaiting: false,
    showReady: false,
    showPlayers: false,
    showAnswerInput: false,
    showQuestion: false,
    showCountdown: false
  };
  if (!type) {
    return {
      ...state,
      ...values // reset all
    };
  }
  return {
    ...state,
    ...values,
    [type]: true
  };
};

const updatePlayer = (player, players) => {
  const { id } = player;
  const playersCopy = [...players];
  const playerIndex = playersCopy.findIndex((p) => p.id === id);
  if (playerIndex !== -1) {
    playersCopy.splice(playerIndex, 1, player);
  }
  return playersCopy;
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
        ...toggleAnswerViews(state, 'showCountDown'),
        isStarted: true
      };
    case 'SET_PLAYER_COMPLETE':
      return {
        ...toggleAnswerViews(state, 'showWaiting'),
        activeQuestion: null,
        isComplete: true
      };
    case 'SET_QUIZ_COMPLETE':
      return {
        ...toggleAnswerViews(state, 'showPlayers'),
        activeQuestion: null,
        isComplete: true
      };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload
      };
    case 'SET_ACTIVE_QUESTION':
      return {
        ...toggleAnswerViews(state, 'showCountdown'),
        activeQuestion: action.payload
      };
    case 'SHOW_ACTIVE_QUESTION':
      return {
        ...state,
        showAnswer: false,
        showWaiting: false,
        showReady: false,
        showPlayers: false,
        showAnswerInput: true,
        showQuestion: true,
        showCountdown: false,
        questionStartTime: new Date()
      };
    case 'SET_AND_SHOW_ACTIVE_QUESTION':
      return {
        ...state,
        showAnswer: false,
        showWaiting: false,
        showReady: false,
        showPlayers: false,
        showAnswerInput: true,
        showQuestion: true,
        showCountdown: false,
        activeQuestion: action.payload,
        questionStartTime: new Date()
      };
    case 'SET_COUNTDOWN':
      return toggleAnswerViews(state, 'showCountdown');
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
      return {
        ...state,
        player: action.payload,
        players: updatePlayer(action.payload, state.players)
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
