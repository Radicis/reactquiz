import React from 'react';
import PropTypes from 'prop-types';
import Player from '../common/Player/Player';


function PlayerRace({ players = [] }) {

  return (
    <div
      className="flex flex-row flex-grow justify-center flex-wrap items-center mt-4 flex-wrap"
    >
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            key={player.id}
            name={player.name}
            score={player.score}
            isReady={player.isReady}
          />
        ))
      ) : (
        <div className="text-2xl">No Players yet!</div>
      )}
    </div>
  );
}

PlayerRace.propTypes = {
  players: PropTypes.array
};

export default PlayerRace;
