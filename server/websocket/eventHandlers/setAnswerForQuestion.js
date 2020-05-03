const { apply } = require('../middleware');

module.exports = {
  name: 'setAnswerForQuestion',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      const { socket, io } = options;
      const { id } = socket;
      const { message, exit } = e;
      io.to(id).emit('error', { message, exit });
      return false;
    }
    const {
      io,
      player,
      questionIndex,
      isCorrect,
      quiz,
      answeredTime,
      playerAnswer
    } = options;

    quiz.setPlayerAnswerForQuestion({
      player,
      questionIndex,
      isCorrect,
      answeredTime,
      playerAnswer
    });

    const { id: quizId } = quiz;

    io.to(quizId).emit('update-player', player);
  }
};
