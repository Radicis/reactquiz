import React from 'react';
import PropTypes from 'prop-types';

import { animated } from 'react-spring';
import Player from '../common/Player/Player';
import upDownTransition from '../../hooks/upDownTransition';

function Players({ players, showPlayers = false }) {
  const transition = upDownTransition(showPlayers);

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-row flex-grow justify-center flex-wrap items-center mt-4 flex-wrap"
            >
              {players.length > 0 ? (
                players.map((player) => (
                  <Player
                    key={player.id}
                    initials={player.initials}
                    progress={player.progress}
                    isReady={player.isReady}
                  />
                ))
              ) : (
                <div className="text-2xl">No Players yet!</div>
              )}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

Players.propTypes = {
  players: PropTypes.array,
  showPlayers: PropTypes.bool
};

export default Players;
