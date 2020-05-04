import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomInput from '../common/CustomInput/CustomInput';
import { animated } from 'react-spring';
import scaleTransition from '../../hooks/scaleTransition';

function UserSetup({ setName, show }) {
  const [name, setLocalName] = useState('');

  const transition = scaleTransition(show);

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
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-col items-center justify-center"
            >
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
                    OK
                  </button>
                </div>
              </div>
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

UserSetup.propTypes = {
  setName: PropTypes.func,
  show: PropTypes.bool
};

export default UserSetup;
