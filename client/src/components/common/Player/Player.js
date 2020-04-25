import React from 'react';
import PropTypes from 'prop-types';

function Player({ name, score, isReady }) {
  return (
    <div
      className={`flex flex-row border-2 m-2 justify-center items-center ${
        isReady ? 'bg-green-400 bounce' : 'bg-yellow-400 sleep'
      } px-4 py-2 rounded-full text-lg overflow-hidden`}
    >
      <div className="flex flex-grow truncate mr-2">{name}</div>
      <div className="font-bold">{score}</div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  isReady: PropTypes.bool
};

export default Player;
