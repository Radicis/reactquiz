import React, {useState} from 'react';
import PropTypes from 'prop-types';

import BoolAnswerInput from './BoolAnswerInput/BoolAnswerInput';

function AnswerInput({answerType = 'BOOL', submitAnswer}) {
	const [answer, setAnswer] = useState(undefined);

	const btnStyle = 'p-2 border mx-2 font-semibold';
	const disabledBtnStyle = `${btnStyle} pointer-events-none opacity-50`;

	const onSubmitAnswer = () => {
		submitAnswer(answer);
	};

	return (
		<div className="p-4 flex flex-col justify-center items-center">
			<div>
				{answerType === 'BOOL' ? <BoolAnswerInput answer={answer} setAnswer={setAnswer}/> : ''}
			</div>
			<div>
				<button className={typeof answer !== 'undefined' ? btnStyle : disabledBtnStyle}
					onClick={onSubmitAnswer}>Submit Answer
				</button>
			</div>
		</div>
	);
}

AnswerInput.propTypes = {
	answerType: PropTypes.string,
	submitAnswer: PropTypes.func
};

export default AnswerInput;
