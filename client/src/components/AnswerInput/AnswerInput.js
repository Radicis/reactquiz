import React, {useState} from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';
import MultiAnswerInput from './MultiAnswerInput/MultiAnswerInput';
import TextAnswerInput from './TextAnswerInput/TextAnswerInput';

function AnswerInput({answerType = 'BOOL'}) {
	const [answer, setAnswer] = useState(undefined);

	function getAnswerComponent (type) {
		switch (type) {
		case 'BOOL': return <BoolAnswerInput answer={answer} setAnswer={setAnswer}/>;
		case 'TEXT': return <TextAnswerInput answer={answer} setAnswer={setAnswer}/>;
		case 'NUMBER': return <BoolAnswerInput answer={answer} setAnswer={setAnswer}/>;
		case 'MULTI': return <MultiAnswerInput answer={answer} setAnswer={setAnswer}/>;
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
	submitAnswer: PropTypes.func
};

export default AnswerInput;
