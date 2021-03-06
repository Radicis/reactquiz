import React from 'react';
import PropTypes from 'prop-types';

function AnswerButton({
  clickAction,
  label,
  correct = false,
  showCorrect = false,
  disabled = false
}) {
  return (
    <button
      className={`answer-button flex-grow transform bg-gray-200 shadow transition duration-200 
      text-2xl border-2 border-gray-400 py-2 px-8 rounded-lg font-semibold outline-none
      relative cursor-pointer
				${disabled && !correct ? 'pointer-events-none opacity-50 border-gray-200' : ''}
				${disabled && correct ? 'pointer-events-none border-gray-200' : ''}
				${correct && showCorrect ? 'bg-green-500' : ''}
			}`}
      style={{ minWidth: '100px' }}
      onClick={clickAction}
    >
      {label}
    </button>
  );
}

AnswerButton.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  showCorrect: PropTypes.bool,
  correct: PropTypes.bool,
  disabled: PropTypes.bool,
  clickAction: PropTypes.func
};

export default AnswerButton;
