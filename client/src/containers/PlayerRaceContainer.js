import React, { useContext } from 'react';
import { Context } from '../store/Store';
import PlayerRace from '../components/PlayerRace/PlayerRace';

function PlayerRaceContainer() {
  const [state] = useContext(Context);
  const { players, showPlayerRace } = state;

  return (
    <React.Fragment>
      {players && showPlayerRace ? <PlayerRace players={players} /> : ''}
    </React.Fragment>
  );
}

export default PlayerRaceContainer;
