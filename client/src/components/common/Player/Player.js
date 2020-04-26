import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring, config } from 'react-spring';

const padding = 28 + 38;

function Player({ numberOfQuestions, initials, isReady, progress }) {
  const getPosition = (prog) => {
    if (!prog) {
      return 0;
    }
    let width = window.innerWidth;
    if (width >= 800) {
      width = 800 - padding; // remove padding
    }
    const percentage = 100 / (numberOfQuestions / prog) / 100;
    const newLeft = percentage * (width - padding);
    console.log(`New left: ${newLeft}`);
    return newLeft;
  };
  const move = useSpring({
    config: config.stiff,
    transform: 'translate3d(0,0,0)',
    p: getPosition(progress)
  });
  return (
    <animated.div
      style={{
        ...move,
        transform: move.p.interpolate((y) => {
          return `translate3d(${y}px,0,0)`;
        })
      }}
      className={`player absolute flex flex-row border z-10 justify-center items-center 
      p-2 rounded-full text-sm overflow-hidden left-0 shadow-lg cursor-pointer
      ${isReady ? 'bg-green-400 bounce' : 'bg-yellow-400 sleep'}`}
    >
      {initials}
    </animated.div>
  );
}

Player.propTypes = {
  initials: PropTypes.string,
  isReady: PropTypes.bool,
  progress: PropTypes.number,
  numberOfQuestions: PropTypes.number
};

export default Player;
