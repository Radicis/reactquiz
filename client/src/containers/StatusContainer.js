import React, { useContext } from 'react';
import { Context } from '../store/Store';

import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import ControlsContainer from './ControlsContainer';

function StatusContainer() {
  const [state] = useContext(Context);
  const { isComplete, showWaiting } = state;

  return (
    <div
      className="status flex flex-row flex-grow justify-center
     text-center border text-2xl shadow-2xl bg-white rounded-lg question relative"
    >
      <WaitingForPlayers completed={isComplete} show={showWaiting} />
      <ControlsContainer />
    </div>
  );
}

export default StatusContainer;
