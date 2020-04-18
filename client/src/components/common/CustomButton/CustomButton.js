import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function CustomButton({
	clickAction,
	faIcon = faCheckCircle,
	label,
	active = false,
	disabled = false
}) {
	return (
		<button
			className={`transition duration-200 text-2xl text-gray-600 border-2 border-gray-400 hover:border-blue-500 py-2 px-4 rounded-full font-semibold mx-4 relative cursor-pointer hover:text-blue-400 hover:border-blue-100 ${
				active ? 'text-blue-600' : ''
			}
				${disabled ? 'pointer-events-none opacity-50 border-gray-200' : ''}
			}`}
			style={{ minWidth: '100px' }}
			onClick={clickAction}
		>
			<span className="mr-2">{label}</span>
			<FontAwesomeIcon icon={faIcon} />
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
