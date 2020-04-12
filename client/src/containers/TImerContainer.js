import React, {useContext} from 'react';

import Timer from '../components/Timer/Timer';
import {Context} from '../store/Store';

function TimerContainer() {
	const [state] = useContext(Context);
	const {showTimer} = state;
	return (
		<div className='relative timer-container my-4'>
			{ showTimer ? <Timer/> : '' }
		</div>
	);
}

export default TimerContainer;
