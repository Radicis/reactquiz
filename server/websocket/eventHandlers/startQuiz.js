const { apply } = require('../middleware');
const { nextQuestion } = require('../helpers');

const QuizList = require('../../models/quizList');

module.exports = {
  name: 'startQuiz',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }

    const { io, quiz } = options;

    console.log('Starting Quiz');

    quiz.reset();

    io.sockets.emit('start-quiz', quiz.getQuestions());
  }
};
