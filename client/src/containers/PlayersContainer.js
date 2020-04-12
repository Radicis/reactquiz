import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Players from '../components/Players/Players';

function PlayersContainer() {
	const [state] = useContext(Context);
	const {players, showPlayers} = state;

	return (
		<div>
			{ showPlayers ? <Players players={players}/> : '' }
		</div>);
}

export default PlayersContainer;
