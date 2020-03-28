import React from 'react';
import PropTypes from 'prop-types';

function OwnerControls(props) {
	const {player} = props;

	console.log(player);

	return (
		<div>
			{ player && player.isOwner ? (<div className="flex justify-center items-center border bg-gray-100">
				<div className="p-4 text-2xl">I AM THE OWNER OF THIS QUIZ</div>
			</div>) : '' }
		</div>
	);
}

OwnerControls.propTypes = {
	player: PropTypes.object,
};

export default OwnerControls;
