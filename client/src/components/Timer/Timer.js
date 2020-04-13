import React from 'react';
import PropTypes from 'prop-types';

function Timer({questionTime}) {
	return (
		<div className="timer relative w-full rounded bg-gray-400 h-4">
			<div className="bg-blue-400 absolute top-0 left-0 h-4" style={{animation: `grow linear forwards ${questionTime}ms` }} />
		</div>
	);
}

Timer.propTypes = {
	questionTime: PropTypes.number
};

export default Timer;
