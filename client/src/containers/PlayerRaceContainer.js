import React, { useContext } from 'react';
import { Context } from '../store/Store';
import PlayerRace from '../components/PlayerRace/PlayerRace';

function PlayerRaceContainer() {
  const [state] = useContext(Context);
  const {
    players,
    questions = [],
    showPlayers = true,
    socket,
    playerId,
    player,
    quizId
  } = state;

  const kickPlayer = (playerIdToKick) => {
    socket.emit('kick-player', { playerIdToKick, playerId, quizId });
  };

  return (
    <PlayerRace
      players={players}
      isOwner={player && player.isOwner}
      numberOfQuestions={questions.length}
      showPlayers={showPlayers}
      kickPlayer={kickPlayer}
    />
  );
}

export default PlayerRaceContainer;
