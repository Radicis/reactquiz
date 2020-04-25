import React from 'react';
import PropTypes from 'prop-types';

import loader from '../../images/loader.svg';

function WaitingForPlayers({ completed }) {
  return (
    <div className="p-4 h-full w-full items-center justify-center flex flex-col">
      <div className="">
        Waiting for everyone to be {completed ? 'done' : 'ready'}..
      </div>
      <img className="h-24" src={loader} alt="Loading.." />
    </div>
  );
}

WaitingForPlayers.propTypes = {
  completed: PropTypes.bool
};

export default WaitingForPlayers;
