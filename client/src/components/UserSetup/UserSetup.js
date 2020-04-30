import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomInput from '../common/CustomInput/CustomInput';

function UserSetup({ setName }) {
  const [name, setLocalName] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setLocalName(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && name.length >= 2) {
      setName(name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-8">
        <CustomInput
          handleChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          maxLength={15}
          placeHolder="Set Your Name"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-grow-0">
          <button
            className={`focus:scale-125 active:scale-125 transform bg-white shadow transition duration-200 text-lg border-2 border-gray-400 py-2 px-4 rounded-full font-semibold mb-4 relative cursor-pointer
				${
          !name || name.length <= 1
            ? 'pointer-events-none opacity-50 border-gray-200'
            : ''
        }
			}`}
            onClick={() => setName(name)}
          >
            <span className="mr-2">OK</span>
          </button>
        </div>
      </div>
    </div>
  );
}

UserSetup.propTypes = {
  setName: PropTypes.func
};

export default UserSetup;
