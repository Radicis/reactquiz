import React, {useContext} from 'react';
import {Context} from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';

/**
 * @return {string}
 */
function UserSetupContainer() {
	// eslint-disable-next-line no-unused-vars
	const [state] = useContext(Context);

	const {socket, player} = state;

	const setPlayerName = name => {
		const {id} = player;
		// Emit the set name event on the socket
		socket.emit('set-name', {id, name});
	};

	return (player && player.isActive ? '' : <UserSetup setPlayerName={setPlayerName}/>);
}

export default UserSetupContainer;
