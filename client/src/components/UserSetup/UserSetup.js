import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../common/CustomButton/CustomButton';
import CustomInput from '../common/CustomInput/CustomInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserSetup({ setPlayerName }) {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setPlayerName(name);
    }
  };

  return (
    <div className="flex flex-col top-0 left-0 h-full w-full items-center justify-center user-setup-container">
      <span className="mb-4 text-3xl font-semibold">Welcome to Quiz!</span>
      <div className="my-8">
        <CustomInput
          handleChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          maxLength="15"
          placeHolder="Set Your Name"
        />
      </div>
      <div className="flex flex-grow-0">
        <button
          className={`bg-white shadow transition duration-200 text-lg text-gray-600 border-2 border-gray-400 hover:border-blue-500 py-2 px-4 rounded-full font-semibold mb-4 relative cursor-pointer hover:text-blue-400 hover:border-blue-100
				${!name ? 'pointer-events-none opacity-50 border-gray-200' : ''}
			}`}
          style={{ minWidth: '100px' }}
          onClick={() => setPlayerName(name)}
        >
          <span className="mr-2">OK</span>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );
}

UserSetup.propTypes = {
  setPlayerName: PropTypes.func
};

export default UserSetup;
