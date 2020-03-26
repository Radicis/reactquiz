import React from 'react';
import PropTypes from 'prop-types';

function Answer(props) {
	const {answerText} = props;
	return (
		<div>
			<div>{answerText}</div>
		</div>
	);
}

Answer.propTypes = {
	answerText: PropTypes.string
};

export default Answer;
