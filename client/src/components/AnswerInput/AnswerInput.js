import React from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import TextAnswerInput from './TextAnswerInput/TextAnswerInput';
import NumberAnswerInput from './NumberAnswerInput/NumberAnswerInput';

function AnswerInput({answerType = 'BOOL', choices, submitAnswer}) {

	function getAnswerComponent (type) {
		switch (type) {
		case 'BOOL': return <BoolAnswerInput setAnswer={submitAnswer}/>;
		case 'TEXT': return <TextAnswerInput setAnswer={submitAnswer}/>;
		case 'NUMBER': return <NumberAnswerInput setAnswer={submitAnswer}/>;
		case 'MULTI': return <MultiAnswerInput setAnswer={submitAnswer} choices={choices}/>;
		}
	}

	return (
		<div className="p-4 flex flex-grow flex-col justify-center items-center">
			{getAnswerComponent(answerType)}
		</div>
	);
}

AnswerInput.propTypes = {
	answerType: PropTypes.string,
	submitAnswer: PropTypes.func,
	choices: PropTypes.array
};

export default AnswerInput;
