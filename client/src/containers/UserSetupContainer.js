import React, {useContext} from 'react';
import {Context} from '../store/Store';

import UserSetup from '../components/UserSetup/UserSetup';

function UserSetupContainer() {
	const [state] = useContext(Context);

	const {socket, player} = state;

	const setPlayerName = name => {
		// Emit the set name event on the socket
		socket.emit('set-name', {name});
	};

	return <React.Fragment>{player && player.isActive ? '' : <UserSetup setPlayerName={setPlayerName}/>}</React.Fragment>;
}

export default UserSetupContainer;
