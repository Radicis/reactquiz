import React, { useContext } from 'react';
import { Context } from '../store/Store';

import Question from '../components/Question/Question';
import { config, useSpring, animated } from 'react-spring';

function QuestionContainer() {
  const [state] = useContext(Context);
  const { activeQuestion, isComplete, isStarted, winner } = state;

  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(-1000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

  return (
    <div className="flex flex-col justify-center h-full p-4">
      {isStarted && activeQuestion ? (
        <Question
          type={activeQuestion.type}
          path={activeQuestion.path}
          content={activeQuestion.content}
        />
      ) : (
        ''
      )}
      {isStarted && isComplete ? (
        <animated.div
          style={props}
          className="flex flex-col justify-center items-center text-2xl flex-grow"
        >
          <div className="font-bold mb-4">Quiz Complete!</div>
          {winner ? <div>{winner} Wins!</div> : ''}
        </animated.div>
      ) : (
        ''
      )}
      {!isStarted ? (
        <animated.div style={props} className="flex justify-center">
          Ready To Start!
        </animated.div>
      ) : (
        ''
      )}
    </div>
  );
}

export default QuestionContainer;
