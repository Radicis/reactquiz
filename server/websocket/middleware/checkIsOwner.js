const QuizList = require('../../models/quizList');

module.exports = {
  name: 'checkIsOwner',
  method: (options) => {
    const { id: playerId } = options;
    const quiz = QuizList.getQuiz('test');
    if (!quiz) {
      throw new Error('No quiz found');
    }
    // if owner or the only one there
    if (quiz.checkIsOwner(playerId) || quiz.getPlayers().length === 1) {
      return options;
    }
    throw new Error('Player is not owner');
  }
};
