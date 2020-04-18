import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';
import CustomInput from '../common/CustomInput/CustomInput';

function UserSetup(props) {
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

  const { setPlayerName } = props;

  return (
    <div className="flex flex-col top-0 left-0 h-full w-full bg-gray-100 items-center justify-center user-setup-container">
      <span className="mb-4 text-3xl font-semibold text-gray-500">
        Welcome to Quiz!
      </span>
      <div className="my-8">
        <CustomInput
          handleChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          maxLength="15"
          placeHolder="Set Your Name"
        />
      </div>
      <div className="flex flex-grow-0">
        <CustomButton
          label="OK"
          disabled={!name}
          clickAction={() => setPlayerName(name)}
          faIcon={faCheck}
        />
      </div>
    </div>
  );
}

UserSetup.propTypes = {
  setPlayerName: PropTypes.func
};

export default UserSetup;
