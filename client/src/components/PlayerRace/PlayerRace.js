import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player/Player';
import { useSpring, animated, config } from 'react-spring';

const padding = 30;

function PlayerRace({ showPlayers, numberOfQuestions, players }) {
  const width = window.innerWidth >= 800 ? 800 : window.innerWidth;

  const props = useSpring({
    config: config.wobbly,
    height: showPlayers ? '74%' : '15%',
    position: showPlayers ? 'relative' : 'absolute',
    borderTopRightRadius: showPlayers ? '0.5rem' : '3rem',
    borderTopLeftRadius: showPlayers ? '0.5rem' : '3rem',
    borderBottomRightRadius: showPlayers ? '0.5rem' : '0rem',
    borderBottomLeftRadius: showPlayers ? '0.5rem' : '0rem',
    margin: showPlayers ? '1rem' : '0rem',
    width: showPlayers ? `${width - padding}px` : `${width}px`,
    zIndex: 1 // hack to prevent the after from becoming invisible
  });

  const finishProps = useSpring({
    transform: showPlayers
      ? 'translate3d(1000px, 0, 0)'
      : 'translate3d(0, 0, 0)'
  });
  return (
    <animated.div
      style={props}
      className="players shadow-2xl border bottom-0 left-0 p-4 overflow-hidden relative bg-white"
    >
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            progress={player.progress}
            score={player.score}
            color={player.color}
            key={player.id}
            initials={player.initials}
            name={player.name}
            numberOfQuestions={numberOfQuestions}
            showPlayers={showPlayers}
            isReady={player.isReady}
            isOwner={player.isOwner}
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
