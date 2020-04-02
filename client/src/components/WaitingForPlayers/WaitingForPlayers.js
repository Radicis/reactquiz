import React from 'react';

import loader from '../../images/loader.svg';

function WaitingForPlayers() {
	return (
		<div className="p-8 h-full w-full items-center justify-center flex flex-col">
			<div className="">Waiting for answers...</div>
			<img className="h-8" src={loader} alt="Loading" />
		</div>
	);
}

WaitingForPlayers.propTypes = {};

export default WaitingForPlayers;
