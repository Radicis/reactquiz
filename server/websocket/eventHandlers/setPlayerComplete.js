const { apply } = require('../middleware');

module.exports = {
  name: 'setPlayerComplete',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { io, player, quiz } = options;

    player.setComplete(true)

    const { id: quizId } = quiz;

    io.to(quizId).emit('update-player', player);

    // Check if all players are complete
    const allComplete = quiz.allPlayersComplete()

    if (allComplete) {
      // Calculate the scores
      quiz.calculateScores();
      // Emit the quiz complete event
      io.to(quizId).emit('quiz-complete', quiz.getPlayers());
    }
  }
};
