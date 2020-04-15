import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Players from '../components/Players/Players';

function PlayersContainer() {
	const [state] = useContext(Context);
	const {players, showPlayers} = state;

	return (
		<React.Fragment>
			{ showPlayers ? <Players players={players}/> : '' }
		</React.Fragment>
	);
}

export default PlayersContainer;
