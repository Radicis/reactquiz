import React, {useState} from 'react';
import PropTypes from 'prop-types';

function NumberAnswerInput({setAnswer}) {
	const [answer, setTempAnswer] = useState('');

	function handleChange(e) {
		const { value }= e.target;
		setTempAnswer(value);
	}

	return (
		<form className="flex flex-grow" onSubmit={() => setAnswer(answer)}>
			<input type="number" onChange={handleChange} />
		</form>
	);
}

NumberAnswerInput.propTypes = {
	answer: PropTypes.bool,
	setAnswer: PropTypes.func
};

export default NumberAnswerInput;
