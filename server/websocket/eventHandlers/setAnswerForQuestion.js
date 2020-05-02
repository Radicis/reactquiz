const { apply } = require('../middleware');

module.exports = {
  name: 'setAnswerForQuestion',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { io, player, questionIndex, isCorrect, quiz } = options;

    quiz.setPlayerAnswerForQuestion({ player, questionIndex, isCorrect });

    const { id: quizId } = quiz;

    io.to(quizId).emit('update-player', player);

  }
};
