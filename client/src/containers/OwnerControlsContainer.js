import React, {useContext} from 'react';
import {Context} from '../store/Store';

import OwnerControls from '../components/OwnerControls/OwnerControls';

function OwnerControlsContainer() {
	const [state] = useContext(Context);
	const {player} = state;

	return <OwnerControls player={player}/>;
}

export default OwnerControlsContainer;
