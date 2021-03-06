const questions = require('../../data/questions');
const Question = require('../question');

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/**
 * Class to encapsulate question list functionality
 */
class QuestionList {
  constructor() {
    this.questions = [];
    this.setQuestions(); // init questions
  }

  getQuestions() {
    return this.questions;
  }

  /**
   * set the questions in a random order
   */
  setQuestions() {
    this.questions = shuffleArray(
      questions.map(
        q =>
          new Question({
            type: q.type,
            content: q.content,
            ...(q.path && { path: q.path }),
            answerType: q.answerType,
            ...(q.answerType === 'MULTI' && { choices: q.choices || [] }),
            answer: q.answer
          })
      )
    );
  }
}

module.exports = QuestionList;
