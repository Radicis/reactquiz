import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player/Player';
import { useSpring, animated } from 'react-spring';

function PlayerRace({
  showPlayers,
  numberOfQuestions,
  players,
  kickPlayer,
  isOwner
}) {
  const props = useSpring({
    height: showPlayers ? '69%' : '10%',
    zIndex: 1 // hack to prevent the after from becoming invisible
  });
  const isTopThree = (player) => {
    const { progress } = player;
    const progressArr = players.map((p) => p.progress).sort((a, b) => a - b);
    if (progressArr.length <= 3) {
      return true;
    }
    progressArr.length = 3;
    return progressArr.includes(progress);
  };
  return (
    <animated.div
      style={props}
      className={`players rounded-lg m-4 shadow-2xl border flex flex-col bottom-0 left-0 overflow-hidden relative bg-white ${
        showPlayers ? 'p-4' : 'p-2'
      }`}
    >
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            progress={player.progress}
            isComplete={player.isComplete}
            isTopThree={isTopThree(player)}
            score={player.score}
            color={player.color}
            initials={player.initials}
            name={player.name}
            numberOfPlayers={players.length}
            numberOfQuestions={numberOfQuestions}
            showPlayers={showPlayers}
            isReady={player.isReady}
            playerId={player.id}
            key={player.id}
            isOwner={player.isOwner}
            showKick={!player.isOwner && isOwner}
            kickPlayer={kickPlayer}
          />
        ))
      ) : (
        <div className="text-2xl">No Players yet!</div>
      )}
    </animated.div>
  );
}

PlayerRace.propTypes = {
  players: PropTypes.array,
  showPlayers: PropTypes.bool,
  isOwner: PropTypes.bool,
  numberOfQuestions: PropTypes.number,
  kickPlayer: PropTypes.func
};

export default PlayerRace;
