import React, { useContext } from 'react';
import { Context } from '../store/Store';

import Controls from '../components/Controls/Controls';

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
    />
  );
}

export default ControlsContainer;
