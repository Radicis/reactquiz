const SocketError = require('../helpers/socketError');
const QuizList = require('../../models/quizList');

module.exports = {
  name: 'requireQuiz',
  method: options => {
    const { quizId } = options;
    const quiz = QuizList.getQuiz(quizId);

    if (!quiz) {
      throw new SocketError({ message: 'Quiz not found', exit: true });
    }
    options.quiz = quiz;
    return options;
  }
};
