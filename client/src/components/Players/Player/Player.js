import React from 'react';
import PropTypes from 'prop-types';

function Player(props) {
	const { name, score } = props;
	return (
		<div className="flex flex-col border-2 m-2 justify-center w-1/6 items-center p-4">
			<div className="text-sm font-semibold flex flex-grow">{name}</div>
			<div className="font-bold">{score}</div>
		</div>
	);
}

Player.propTypes = {
	name: PropTypes.string,
	score: PropTypes.number
};

export default Player;
