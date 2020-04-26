import React, { useContext } from 'react';
import { Context } from '../store/Store';
import PlayerRace from '../components/PlayerRace/PlayerRace';

function PlayerRaceContainer() {
  const [state] = useContext(Context);
  const { players, questions = [], showPlayers = true } = state;

  return (
    <PlayerRace
      players={players}
      numberOfQuestions={questions.length}
      showPlayers={showPlayers}
    />
  );
}

export default PlayerRaceContainer;
