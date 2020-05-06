import React, { useContext } from 'react';
import { Context } from '../store/Store';
import Controls from '../components/Controls/Controls';

function ControlsContainer() {
  const [state, dispatch] = useContext(Context);
  const { socket, player, activeQuestion, isStarted, isComplete } = state;

  const setPlayerReady = () => {
    socket.emit('set-player-ready');
    dispatch({
      type: 'SET_WAITING'
    });
  };

  const showLinkModal = () => {
    dispatch({
      type: 'SHOW_LINK_MODAL',
      payload: true
    });
  };

  const startQuiz = () => {
    socket.emit('start-quiz');
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
