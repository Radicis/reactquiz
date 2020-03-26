import React from 'react';
import PropTypes from 'prop-types';

function Player(props) {
	const { name, score } = props;
	return (
		<div className="flex flex-col">
			<div className="font-semibold">{name}</div>
			<div>{score}</div>
		</div>
	);
}

Player.propTypes = {
	name: PropTypes.string,
	score: PropTypes.string
};

export default Player;
