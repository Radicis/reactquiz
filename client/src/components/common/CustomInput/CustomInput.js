import React from 'react';
import PropTypes from 'prop-types';

function CustomInput({
  handleChange,
  handleKeyDown,
  placeHolder,
  maxLength,
  minLength,
  type = 'text'
}) {
  return (
    <input
      className="rounded-full border-2 bg-white border-gray-500 shadow-xl w-full py-2 px-6 font-semibold text-2xl outline-none"
      type={type}
      onChange={handleChange}
      maxLength={maxLength || 99}
      minLength={minLength || 2}
      placeholder={placeHolder}
      onKeyPress={handleKeyDown}
    />
  );
}

CustomInput.propTypes = {
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  handleChange: PropTypes.func,
  handleKeyDown: PropTypes.func
};

export default CustomInput;
