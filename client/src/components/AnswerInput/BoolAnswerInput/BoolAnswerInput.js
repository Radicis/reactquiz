import React from 'react';
import PropTypes from 'prop-types';

function BoolAnswerInput({answer, setAnswer}) {
	const btnStyle = 'p-2 border mx-2 font-semibold';
	const activeBtnStyle = `${btnStyle} bg-green-300`;
	return (
		<div className="p-4">
			<button className={answer ? activeBtnStyle : btnStyle} onClick={() => setAnswer(true)}>TRUE</button>
			<button className={typeof answer !== 'undefined' && !answer ? activeBtnStyle : btnStyle}
					onClick={() => setAnswer(false)}>FALSE
			</button>
		</div>
	);
}

BoolAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default BoolAnswerInput;
