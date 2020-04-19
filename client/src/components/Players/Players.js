import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player/Player';
import { config, useSpring, animated } from 'react-spring';

function Players({ players }) {
  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(0, 1000px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

  return (
    <animated.div
      style={props}
      className="flex flex-row flex-grow justify-center flex-wrap items-center mt-4 flex-wrap"
    >
      {players.length > 0 ? (
        players.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))
      ) : (
        <div className="text-2xl">No Players yet!</div>
      )}
    </animated.div>
  );
}

Players.propTypes = {
  players: PropTypes.array
};

export default Players;
