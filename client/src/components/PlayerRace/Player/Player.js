import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faQuestion,
  faCheck,
  faCrown,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

function Player({
  numberOfQuestions,
  numberOfPlayers,
  initials,
  name,
  score,
  isReady,
  progress,
  color,
  isOwner,
  numCorrect,
  numIncorrect,
  showPlayers,
  showKick,
  playerId,
  kickPlayer
}) {
  const getPosition = (prog) => {
    if (!prog) {
      return 10;
    }
    return 100 / (numberOfQuestions / prog);
  };

  const getHeight = () => {
    if (showPlayers) {
      return 'auto';
    }
    return `${100 / numberOfPlayers - 2}%`;
  };

  const move = useSpring({
    config: config.stiff,
    p: getPosition(progress)
  });

  return (
    <animated.div
      style={{
        ...move,
        width: move.p.interpolate((y) => {
          if (!showPlayers) {
            return `${y}%`;
          }
          return 'auto';
        })
      }}
      className={`
      flex flex-grow
      player relative left-0`}
    >
      <div
        className={`flex flex-row flex-grow items-center ${
          showPlayers ? 'mb-4' : ''
        }`}
      >
        {showPlayers ? (
          <div
            className={`text-gray-600 mr-4 status-icon flex justify-center 
            ${!isOwner && isReady ? 'slow-bounce' : ''}`}
          >
            {isOwner ? (
              <FontAwesomeIcon icon={faCrown} />
            ) : isReady ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faQuestion} />
            )}
          </div>
        ) : (
          ''
        )}
        <div
          style={{ background: color || '#ccc' }}
          className={`overflow-hidden flex flex-grow ${
            showPlayers
              ? 'text-lg rounded-lg shadow-lg py-2 px-6'
              : 'text-sm rounded px-4'
          }`}
        >
          {showPlayers ? (
            <React.Fragment>
              <div className="flex flex-grow">{name || 'UNKNOWN'}</div>
              <div>{numCorrect}</div>
              <div>{numIncorrect}</div>
              <div>{score || 0}</div>
            </React.Fragment>
          ) : (
            <div className="flex flex-grow text-xs">
              {initials || 'UNKNOWN'}
            </div>
          )}
        </div>
        {showKick && showPlayers ? (
          <div
            className="ml-4 cursor-pointer"
            onClick={() => kickPlayer(playerId)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        ) : (
          ''
        )}
      </div>
    </animated.div>
  );
}

Player.propTypes = {
  initials: PropTypes.string,
  kickPlayer: PropTypes.func,
  playerId: PropTypes.string,
  isReady: PropTypes.bool,
  isOwner: PropTypes.bool,
  showPlayers: PropTypes.bool,
  showKick: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string,
  progress: PropTypes.number,
  numberOfPlayers: PropTypes.number,
  numIncorrect: PropTypes.number,
  numCorrect: PropTypes.number,
  totalTime: PropTypes.number,
  score: PropTypes.number,
  numberOfQuestions: PropTypes.number
};

export default Player;
