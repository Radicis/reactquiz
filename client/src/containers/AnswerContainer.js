import React, { useContext } from 'react';
import { Context } from '../store/Store';

import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Ready from '../components/Ready/Ready';
import Countdown from '../components/Countdown/Countdown';

function AnswerContainer() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const { socket, showWaiting, showReady, showCountdown, isComplete } = state;

  const setPlayerReady = () => {
    socket.emit('set-player-ready');
    dispatch({
      type: 'SET_WAITING'
    });
  };

  return (
    <React.Fragment>
      <WaitingForPlayers completed={isComplete} show={showWaiting} />
      <Countdown time={10} show={showCountdown} />
      <Ready setPlayerReady={setPlayerReady} show={showReady} />
    </React.Fragment>
  );
}

export default AnswerContainer;
