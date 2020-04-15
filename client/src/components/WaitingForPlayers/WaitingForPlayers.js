import React from 'react';

import loader from '../../images/loader.svg';

function WaitingForPlayers() {
	return (
		<div className="p-4 h-full w-full items-center justify-center flex flex-col">
			<div className="">Waiting for other players...</div>
			<img className="h-12" src={loader} alt="Loading..." />
		</div>
	);
}

WaitingForPlayers.propTypes = {};

export default WaitingForPlayers;
