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
    showReady
  } = state;

  const setPlayerReady = () => {
    socket.emit('set-player-ready');
    dispatch({
      type: 'SET_WAITING'
    });
  };

  const showLinkModal = () => {
    alert(`${baseUrl}/3837fy547gmn4c56g`);
  };

  const startQuiz = () => {
    // Emit the set name event on the socket
    socket.emit('start-quiz');
  };

  return (
    <Controls
      player={player}
      activeQuestion={activeQuestion}
      isStarted={isStarted}
      startQuiz={startQuiz}
      isComplete={isComplete}
      showReady={showReady}
      setPlayerReady={setPlayerReady}
      showLinkModal={showLinkModal}
    />
  );
}

export default ControlsContainer;
