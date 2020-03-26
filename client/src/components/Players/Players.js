import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player/Player';

function Players(props) {
	const {players} = props;
	return (
		<div className="flex flex-row">
			{players.length > 0 ? players.map(player => (<Player key={player.id} player={player}/>)) :
				<div>No Players yet!</div>}
		</div>
	);
}

Players.propTypes = {
	players: PropTypes.array
};

export default Players;
