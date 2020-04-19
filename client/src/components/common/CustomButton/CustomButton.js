import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomButton({
  clickAction,
  faIcon,
  label,
  active = false,
  disabled = false
}) {
  return (
    <button
      className={`bg-white shadow transition duration-200 text-lg text-gray-600 border-2 border-gray-400 hover:border-blue-500 py-2 px-4 rounded-full font-semibold mr-4 mb-2 relative cursor-pointer hover:text-blue-400 hover:border-blue-100 ${
        active ? 'text-blue-600' : ''
      }
				${disabled ? 'pointer-events-none opacity-50 border-gray-200' : ''}
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
  disabled: PropTypes.bool,
  clickAction: PropTypes.func
};

export default CustomButton;
