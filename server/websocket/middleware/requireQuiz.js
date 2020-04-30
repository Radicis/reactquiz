const QuizList = require('../../models/quizList');

module.exports = {
  name: 'requireQuiz',
  method: (options) => {
    const { quizId } = options;
    const quiz = QuizList.getQuiz(quizId);

    if (!quiz) {
      throw new Error('Quiz not found');
    }
    options.quiz = quiz;
    return options;
  }
};
