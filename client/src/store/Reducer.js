const toggleAnswerViews = (state, type) => {
  const values = {
    showWaiting: false,
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
    case 'RESET':
      localStorage.clear();
      return {
        ...toggleAnswerViews(state),
        error: null,
        activeQuestion: null,
        questions: [],
        isStarted: false,
        isComplete: false,
        showPlayers: true,
        players: [],
        player: null,
        playerId: null,
        quizId: null,
        showLinkModal: false
      };
    case 'INIT':
      return {
        ...state,
        quizId: action.payload.quizId,
        playerId: action.payload.playerId
      };
    case 'SET_PLAYER_NAME':
      return {
        ...state,
        playerName: action.payload
      };
    case 'SET_PLAYER_ID':
      return {
        ...state,
        playerId: action.payload
      };
    case 'SET_QUIZ_ID':
      return {
        ...state,
        quizId: action.payload
      };
    case 'START_QUIZ':
      return {
        ...state,
        ...toggleAnswerViews(state, 'showCountdown'),
        isStarted: true,
        isComplete: false,
        showPlayers: false
      };
    case 'SET_QUIZ_COMPLETE':
      return {
        ...toggleAnswerViews(state, 'showPlayers'),
        activeQuestion: null,
        isComplete: true,
        players: action.payload
      };
    case 'SET_PLAYER_COMPLETE':
      return {
        ...toggleAnswerViews(state, 'showPlayers'),
        activeQuestion: null,
        showWaiting: true
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
        showWaiting: false,
        showQuestion: true,
        showCountdown: false,
        showPlayers: false,
        questionStartTime: new Date()
      };
    case 'SET_AND_SHOW_ACTIVE_QUESTION':
      return {
        ...state,
        showWaiting: false,
        showQuestion: true,
        showCountdown: false,
        showPlayers: false,
        activeQuestion: action.payload,
        questionStartTime: new Date()
      };
    case 'SET_COUNTDOWN':
      return {
        ...toggleAnswerViews(state, 'showCountdown'),
        showPlayers: false
      };
    case 'SET_WAITING':
      return toggleAnswerViews(state, 'showWaiting');
    case 'SET_PLAYER_ANSWER':
      return {
        ...state,
        playerAnswer: action.payload,
        showWaiting: true
      };
    case 'UPDATE_PLAYER':
      return {
        ...state,
        player:
          state.playerId === action.payload.id ? action.payload : state.player,
        players: updatePlayer(action.payload, state.players)
      };
    case 'SET_PLAYERS':
      return {
        ...state,
        players: action.payload
      };
    case 'SET_CONNECTED':
      return {
        ...state,
        error: false,
        connected: true
      };
    case 'SET_JOINED':
      return {
        ...state,
        error: false,
        joined: true,
        connected: true,
        player: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload || null,
        loading: action.payload ? false : state.loading
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SHOW_LINK_MODAL':
      return {
        ...state,
        showLinkModal: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
