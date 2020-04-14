import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

function CustomButton({clickAction, faIcon = faCheckCircle, label, active = false}) {
	return (
		<button className={`border py-2 px-4 rounded font-semibold text-gray-500 mx-4 shadow-sm relative cursor-pointer ${ active ? 'text-blue-600' : ''}`} onClick={clickAction}>
			<span className="mr-2">{label}</span>
			<FontAwesomeIcon icon={faIcon} />
		</button>
	);
}

CustomButton.propTypes = {
	label: PropTypes.string,
	faIcon: PropTypes.object,
	active: PropTypes.bool,
	clickAction: PropTypes.func
};

export default CustomButton;
