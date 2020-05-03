import React, { useContext } from 'react';
import { Context } from '../store/Store';
import Controls from '../components/Controls/Controls';
import { baseUrl } from '../config';

function ControlsContainer() {
  const [state, dispatch] = useContext(Context);
  const {
    socket,
    player,
    activeQuestion,
    isStarted,
    isComplete,
    quizId,
    playerId
  } = state;

  const setPlayerReady = () => {
    socket.emit('set-player-ready', { playerId, quizId });
    dispatch({
      type: 'SET_WAITING'
    });
  };

  const showLinkModal = () => {
    alert(`${baseUrl}/${quizId}`);
  };

  const startQuiz = () => {
    socket.emit('start-quiz', { quizId, playerId });
  };

  return (
    <Controls
      player={player}
      activeQuestion={activeQuestion}
      startQuiz={startQuiz}
      setPlayerReady={setPlayerReady}
      showLinkModal={showLinkModal}
      show={!isStarted || isComplete}
    />
  );
}

export default ControlsContainer;
