import React from 'react';
import PropTypes from 'prop-types';

import ImageContent from './ImageContent/ImageContent';
import VideoContent from './VideoContent/VideoContent';
import Answer from '../Answer/Answer';
import AnswerInput from '../AnswerInput/AnswerInput';

function Question({
  submitAnswer = () => {},
  type = 'TEXT',
  answer = '',
  choices = [],
  answerType = 'BOOL',
  showAnswer = false,
  isCorrect = false,
  showAnswerInput = true,
  path = '',
  content = ''
}) {
  function renderSwitch(param) {
    switch (param) {
      case 'IMAGE':
        return <ImageContent path={path} content={content} />;
      case 'VIDEO':
        return <VideoContent path={path} content={content} />;
      default:
        return (
          <div className="flex justify-center items-center text-center p-4 flex-grow text-question relative">
            {content}
          </div>
        );
    }
  }

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col flex-grow justify-center my-4">
        {renderSwitch(type)}
      </div>
      <div className="flex justify-center">
        <Answer show={showAnswer} answer={answer} isCorrect={isCorrect} />
        <AnswerInput
          show={showAnswerInput}
          submitAnswer={submitAnswer}
          answerType={answerType}
          choices={choices}
        />
      </div>
    </div>
  );
}

Question.propTypes = {
  submitAnswer: PropTypes.func,
  type: PropTypes.string,
  path: PropTypes.string,
  content: PropTypes.string,
  choices: PropTypes.array,
  answerType: PropTypes.string,
  answer: PropTypes.string,
  showAnswer: PropTypes.bool,
  showAnswerInput: PropTypes.bool,
  isCorrect: PropTypes.bool
};

export default Question;
