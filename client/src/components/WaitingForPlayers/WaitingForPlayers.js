import React from 'react';

import loader from '../../images/loader.svg';

function WaitingForPlayers() {
  return (
    <div className="p-4 h-full w-full items-center justify-center flex flex-col">
      <div className="">Waiting for everyone to be ready..</div>
      <img className="h-24" src={loader} alt="Loading.." />
    </div>
  );
}

WaitingForPlayers.propTypes = {};

export default WaitingForPlayers;
