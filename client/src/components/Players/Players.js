import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player/Player';

function Players(props) {
	const {players} = props;
	return (
		<div className="flex flex-row justify-center items-center border bg-gray-100 h-24 p-4 mb-4">
			{players.length > 0 ? players.map(player => (<Player key={player.id} name={player.name} score={player.score}/>)) :
				<div>No Players yet!</div>}
		</div>
	);
}

Players.propTypes = {
	players: PropTypes.array
};

export default Players;
