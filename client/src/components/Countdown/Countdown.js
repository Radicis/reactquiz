import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Countdown({ time }) {
  const [go, setGo] = useState(false);
  const goGo = () => {
    setGo(true);
  };
  return (
    <div className="flex flex-grow items-center justify-center">
      {go ? (
        <div className="text-4xl font-semibold">GO!</div>
      ) : (
        <CountdownCircleTimer
          isPlaying
          durationSeconds={time}
          colors={[['#63B3ED']]}
          strokeLinecap="square"
          onComplete={goGo}
        />
      )}
    </div>
  );
}

Countdown.propTypes = {
  time: PropTypes.number
};

export default Countdown;
