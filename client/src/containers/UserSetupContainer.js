import React, { useContext } from 'react';
import { Context } from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';
import { useSpring, animated } from 'react-spring';

function UserSetupContainer() {
	const [state] = useContext(Context);

	const { socket, player } = state;

	const props = useSpring({
		delay: 1000,
		opacity: player ? 1 : 0
	});

	const setPlayerName = name => {
		// Emit the set name event on the socket
		socket.emit('set-name', { name });
	};

	return (
		<animated.div style={props} className="flex flex-grow">
			{player ? (
				player.isActive ? (
					''
				) : (
					<UserSetup setPlayerName={setPlayerName} />
				)
			) : (
				''
			)}
		</animated.div>
	);
}

export default UserSetupContainer;
