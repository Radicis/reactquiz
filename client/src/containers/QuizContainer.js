import React, { useContext } from 'react';
import { Context } from '../store/Store';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import PlayersContainer from './PlayersContainer';

function QuizContainer() {
  const [state] = useContext(Context);

  const { player, activeQuestion } = state;

  return (
    <React.Fragment>
      {player && player.isActive ? (
        <div className="flex flex-col flex-grow justify-center p-4">
          <div className="flex flex-col flex-grow justify-center my-4">
            {activeQuestion ? <QuestionContainer /> : <PlayersContainer />}
          </div>
          <div className="flex flex-1 justify-center items-center mb-2">
            <AnswerContainer />
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
