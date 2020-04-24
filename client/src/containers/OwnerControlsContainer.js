import React, { useContext } from 'react';
import { Context } from '../store/Store';

import OwnerControls from '../components/OwnerControls/OwnerControls';

function OwnerControlsContainer() {
  const [state] = useContext(Context);
  const { socket, player, activeQuestion, isStarted, isComplete } = state;

  const startQuiz = () => {
    // Emit the set name event on the socket
    socket.emit('start-quiz');
  };

  return (
    <OwnerControls
      player={player}
      activeQuestion={activeQuestion}
      isStarted={isStarted}
      startQuiz={startQuiz}
      isComplete={isComplete}
    />
  );
}

export default OwnerControlsContainer;
