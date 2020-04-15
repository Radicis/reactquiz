import React, {useContext} from 'react';

import Timer from '../components/Timer/Timer';
import {Context} from '../store/Store';

function TimerContainer() {
	const [state] = useContext(Context);
	const {questionTime} = state;
	return (
		<div className='relative my-4 px-4'>
			{ questionTime ? <Timer questionTime={questionTime}/> : '' }
		</div>
	);
}

export default TimerContainer;
