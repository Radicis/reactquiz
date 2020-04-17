import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({ handleChange, placeHolder }) {
	return (
		<input
			className="rounded-full border-2 shadow-xl w-full py-2 px-6 font-semibold text-2xl text-gray-600"
			type="text"
			onChange={handleChange}
			placeholder={placeHolder}
		/>
	);
}

CustomInput.propTypes = {
	placeHolder: PropTypes.string,
	handleChange: PropTypes.func
};

export default CustomInput;
