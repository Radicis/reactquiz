import React, { useContext } from 'react';
import { Context } from '../store/Store';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import PlayersContainer from './PlayersContainer';
import Answer from '../components/Answer/Answer';

function QuizContainer() {
  const [state] = useContext(Context);
  const { player, showAnswer, activeQuestion } = state;

  return (
    <React.Fragment>
      {player && player.isActive ? (
        <div className="flex flex-col flex-grow justify-center p-4 my-12">
          <div className="flex-2 my-2">
            <QuestionContainer />
          </div>
          <div className="h-10">
            {showAnswer ? (
              <Answer answer={activeQuestion.answer.toString()} />
            ) : (
              ''
            )}
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
