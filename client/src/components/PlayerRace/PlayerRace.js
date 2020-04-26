import React from 'react';
import PropTypes from 'prop-types';
import Player from '../common/Player/Player';
import { useSpring, animated } from 'react-spring';

function PlayerRace({ showPlayers, numberOfQuestions, players }) {
  const props = useSpring({
    height: showPlayers ? '70%' : '20%'
  });

  const finishProps = useSpring({
    transform: showPlayers
      ? 'translate3d(1000px, 0, 0)'
      : 'translate3d(0, 0, 0)'
  });
  return (
    <animated.div
      style={props}
      className="flex bg-white shadow-2xl rounded-t-xl overflow-hidden flex-row flex-grow justify-center w-full absolute bottom-0 left-0 flex-wrap items-center mt-4 flex-wrap"
    >
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            progress={player.progress}
            key={player.id}
            initials={player.initials}
            numberOfQuestions={numberOfQuestions}
            isReady={player.isReady}
          />
        ))
      ) : (
        <div className="text-2xl">No Players yet!</div>
      )}
      <animated.div style={finishProps} className="finish" />
    </animated.div>
  );
}

PlayerRace.propTypes = {
  players: PropTypes.array,
  showPlayers: PropTypes.bool,
  numberOfQuestions: PropTypes.number
};

export default PlayerRace;
