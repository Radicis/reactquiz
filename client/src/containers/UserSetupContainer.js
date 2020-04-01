import React, {useContext} from 'react';
import {Context} from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';

function UserSetupContainer() {
	// eslint-disable-next-line no-unused-vars
	const [state] = useContext(Context);

	const {socket, player} = state;

	const setPlayerName = name => {
		// Emit the set name event on the socket
		socket.emit('set-name', {name});
	};

	return <div>{player && player.isActive ? '' : <UserSetup setPlayerName={setPlayerName}/>}</div>;
}

export default UserSetupContainer;
