import React, { useContext } from 'react';
import { Context } from '../store/Store';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import PlayersContainer from './PlayersContainer';

function QuizContainer() {
  const [state] = useContext(Context);
  const { player } = state;

  return (
    <React.Fragment>
      {player && player.isActive ? (
        <div className="quiz-container flex flex-col justify-center h-full p-4">
          <div className="flex-2 my-2">
            <QuestionContainer />
          </div>
          <div className="flex flex-1 justify-center mb-2">
            <AnswerContainer />
            <PlayersContainer />
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
