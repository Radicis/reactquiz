import React from 'react';
import PropTypes from 'prop-types';

function Timer({questionTime}) {
	return (
		<div className="absolute h-full w-full pointer-events-none left-0 top-0">
			<div className="bg-gray-200 w-4 h-full left-0 bottom-0 absolute">
				<div className="timer bottom-0 left-0 w-full" style={{animation: `grow linear forwards ${questionTime}ms` }} />
				<div className="timer top-0 left-0 w-full" style={{animation: `grow linear forwards ${questionTime}ms` }} />
			</div>
			<div className="bg-gray-200 w-4 h-full right-0 bottom-0 absolute">
				<div className="timer bottom-0 right-0 w-full" style={{animation: `grow linear forwards ${questionTime}ms` }} />
				<div className="timer top-0 right-0 w-full" style={{animation: `grow linear forwards ${questionTime}ms` }} />
			</div>
		</div>
	);
}

Timer.propTypes = {
	questionTime: PropTypes.number
};

export default Timer;
