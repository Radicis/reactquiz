import React, { useContext } from 'react';
import { Context } from '../store/Store';

import Question from '../components/Question/Question';

function QuestionContainer() {
  const [state] = useContext(Context);
  const {
    socket,
    activeQuestion,
    questionStartTime,
    answer,
    isCorrect,
    showAnswer,
    showAnswerInput
  } = state;

  const submitAnswer = (playerAnswer) => {
    const { id: questionIndex, answer } = activeQuestion;
    const isCorrect = playerAnswer === answer;
    socket.emit('set-player-answer-for-question', {
      questionIndex,
      isCorrect,
      playerAnswer,
      answeredTime: new Date() - questionStartTime
    });
  };

  return (
    <div className="flex flex-col justify-center h-full p-4">
      <Question
        type={activeQuestion.type}
        path={activeQuestion.path}
        answerType={activeQuestion.answerType}
        content={activeQuestion.content}
        choices={activeQuestion.choices}
        submitAnswer={submitAnswer}
        answer={answer}
        isCorrect={isCorrect}
        showAnswer={showAnswer}
        showAnswerInput={showAnswerInput}
      />
    </div>
  );
}

export default QuestionContainer;
