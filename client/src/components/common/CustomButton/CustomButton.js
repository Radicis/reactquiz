import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomButton({
  clickAction,
  faIcon,
  label,
  grow = false,
  disabled = false
}) {
  return (
    <button
      className={`focus:scale-105 focus:border-gray-700 bg-white active:scale-105 outline-none transform shadow transition duration-200 text-2xl border-2 border-gray-400 py-2 px-8 rounded-full font-semibold relative cursor-pointer
				${disabled ? 'pointer-events-none opacity-50 border-gray-200' : ''}
				${grow ? 'flex-grow' : ''}
			}`}
      style={{ minWidth: '100px' }}
      onClick={clickAction}
    >
      <span className={`${faIcon ? 'mr-2' : ''}`}>{label}</span>
      {faIcon ? <FontAwesomeIcon icon={faIcon} /> : ''}
    </button>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string,
  faIcon: PropTypes.object,
  active: PropTypes.bool,
  showCorrect: PropTypes.bool,
  correct: PropTypes.bool,
  grow: PropTypes.bool,
  disabled: PropTypes.bool,
  clickAction: PropTypes.func
};

export default CustomButton;
