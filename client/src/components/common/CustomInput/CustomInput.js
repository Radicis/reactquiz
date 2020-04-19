import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({
  handleChange,
  handleKeyDown,
  placeHolder,
  maxLength,
  type = 'text'
}) {
  return (
    <input
      className="rounded-full border-2 border-gray-500 shadow-xl w-full py-2 px-6 font-semibold text-2xl text-gray-600"
      type={type}
      onChange={handleChange}
      maxLength={maxLength || 99}
      placeholder={placeHolder}
      onKeyPress={handleKeyDown}
    />
  );
}

CustomInput.propTypes = {
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeyDown: PropTypes.func
};

export default CustomInput;
