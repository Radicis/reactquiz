import React from 'react';
import PropTypes from 'prop-types';

function Timer({questionTime}) {
	return (
		<div className="timer relative w-full rounded bg-gray-400 h-2">
			<div className="top-0 left-0 h-full" style={{animation: `grow linear forwards ${questionTime}ms` }} />
		</div>
	);
}

Timer.propTypes = {
	questionTime: PropTypes.number
};

export default Timer;
