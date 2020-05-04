const { apply } = require('../middleware');

module.exports = {
  name: 'setPlayerComplete',
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
    const { io, player, quiz } = options;

    player.setComplete(true);

    const { id: quizId } = quiz;

    io.to(quizId).emit('update-player', player);

    // Check if all players are complete
    const allComplete = quiz.allPlayersComplete();

    if (allComplete) {
      // Calculate the scores
      quiz.calculateScores();
      quiz.resetPlayers();
      // Emit the quiz complete event
      io.to(quizId).emit('quiz-complete', quiz.getPlayers());
    }
  }
};
