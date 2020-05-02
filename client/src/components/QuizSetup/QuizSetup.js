import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../common/CustomInput/CustomInput';
import { animated } from 'react-spring';
import scaleTransition from '../../hooks/scaleTransition';

function QuizSetup({ joinQuiz, createQuiz, show }) {
  const [quizId, setId] = useState('');

  const transition = scaleTransition(show);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && quizId.length >= 3) {
      joinQuiz(setId);
    }
  };

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="flex flex-col">
              <div className="my-8">
                <CustomInput
                  handleChange={handleInputChange}
                  handleKeyDown={handleKeyDown}
                  maxLength={15}
                  placeHolder="Enter Quiz ID"
                />
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex flex-grow-0">
                  <button
                    className={`focus:scale-125 active:scale-125 transform bg-white shadow mr-4 transition duration-200 text-lg border-2 border-gray-400 py-2 px-4 rounded-full font-semibold mb-4 relative cursor-pointer
				${
          !quizId || quizId.length <= 1
            ? 'pointer-events-none opacity-50 border-gray-200'
            : ''
        }
			}`}
                    onClick={() => joinQuiz(quizId)}
                  >
                    Join
                  </button>
                </div>
                <div className="flex flex-grow-0">
                  <button
                    className={
                      'focus:scale-125 active:scale-125 transform bg-white shadow transition duration-200 text-lg border-2 border-gray-400 py-2 px-4 rounded-full font-semibold mb-4 relative cursor-pointer'
                    }
                    onClick={createQuiz}
                  >
                    Create
                  </button>
                </div>
              </div>
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

QuizSetup.propTypes = {
  create: PropTypes.bool,
  joinQuiz: PropTypes.func,
  createQuiz: PropTypes.func,
  show: PropTypes.bool
};

export default QuizSetup;
