import React from 'react';
import PropTypes from 'prop-types';

import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BoolAnswerInput({setAnswer}) {

	return (
		<div className="p-4 flex flex-row">
			<div className="radio-btn">
				<label htmlFor="answerTrue">True</label>
				<input type="radio" id="answerTrue" name="answer" value="true"
							  />
			</div>
			<div className="radio-btn">
				<label htmlFor="answerFalse">True</label>
				<input type="radio" id="answerFalse" name="answer" value="false"
							  />
			</div>
		</div>
	);
}

BoolAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default BoolAnswerInput;
