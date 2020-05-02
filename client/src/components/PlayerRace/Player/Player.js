import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faQuestion,
  faCheck,
  faCrown
} from '@fortawesome/free-solid-svg-icons';

const padding = 20;

function Player({
  numberOfQuestions,
  initials,
  name,
  score,
  isReady,
  progress,
  color,
  isOwner,
  totalTime,
  numCorrect,
  numIncorrect,
  showPlayers
}) {
  const getPosition = (prog) => {
    if (!prog) {
      return 10;
    }
    let width = window.innerWidth;
    if (width >= 800) {
      width = 800 - padding; // remove padding
    }
    const percentage = 100 / (numberOfQuestions / prog) / 100;
    return percentage * width - padding;
  };
  const move = useSpring({
    config: config.stiff,
    transform: `translate3d(${padding}px,0,0)`,
    p: getPosition(progress)
  });
  return (
    <animated.div
      style={{
        ...move,
        transform: move.p.interpolate((y) => {
          if (showPlayers) {
            return 'translate3d(0px,0,0)';
          }
          return `translate3d(${y}px,0,0)`;
        })
      }}
      className={`
      flex flex-grow
      player relative left-0`}
    >
      {!showPlayers ? (
        <div
          style={{ background: color || '#ccc' }}
          className={`rounded-full shadow-lg p-2 overflow-hidden text-sm cursor-pointer
          ${isOwner || isReady ? 'bounce' : 'sleep'}`}
        >
          {initials || '??'}
        </div>
      ) : (
        <div className="flex flex-row mb-4 flex-grow">
          <div className="text-gray-600 mr-4 status-icon">
            {isOwner ? (
              <FontAwesomeIcon icon={faCrown} />
            ) : isReady ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faQuestion} />
            )}
          </div>
          <div
            style={{ background: color || '#ccc' }}
            className="text-lg rounded-lg shadow-lg py-2 px-6 overflow-hidden flex flex-grow"
          >
            <div className="flex flex-grow">{name || 'UNKNOWN'}</div>
            <div>{totalTime}</div>
            <div>{numCorrect}</div>
            <div>{numIncorrect}</div>
            <div>{score || 0}</div>
          </div>
        </div>
      )}
    </animated.div>
  );
}

Player.propTypes = {
  initials: PropTypes.string,
  isReady: PropTypes.bool,
  isOwner: PropTypes.bool,
  showPlayers: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string,
  progress: PropTypes.number,
  numIncorrect: PropTypes.number,
  numCorrect: PropTypes.number,
  totalTime: PropTypes.number,
  score: PropTypes.number,
  numberOfQuestions: PropTypes.number
};

export default Player;
