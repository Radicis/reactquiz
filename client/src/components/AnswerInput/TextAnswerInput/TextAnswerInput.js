import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TextAnswerInput({setAnswer}) {
	const [answer, setTempAnswer] = useState('');

	function handleChange(e) {
		const { value }= e.target;
		setTempAnswer(value);
	}

	return (
		<form className="flex flex-grow" onSubmit={() => setAnswer(answer)}>
			<input type="text" onChange={handleChange} />
		</form>
	);
}

TextAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default TextAnswerInput;
