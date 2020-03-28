import React, {useContext} from 'react';
import {Context} from '../store/Store';

import Players from '../components/Players/Players';

function PlayersContainer() {
	const [state] = useContext(Context);
	const {players} = state;

	return <Players players={players}/>;
}

export default PlayersContainer;
