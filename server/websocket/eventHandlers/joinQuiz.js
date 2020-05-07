const { apply } = require('../middleware');

module.exports = {
  name: 'joinQuiz',
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
    const { socket, io, player, quiz } = options;

    const { id: quizId } = quiz;
    const { id: socketId } = socket;

    // Leave any player specific one so it doesn't pollute the rooms list
    const { name } = player;

    // Socket joined quiz
    socket.join(quizId);

    io.to(socketId).emit('join-quiz', player);

    // Broadcast the player list to ALL connected sockets
    io.to(quizId).emit('players', quiz.getPlayers());

    // if quiz is in progress then send the status event
    if (quiz.isInProgress()) {
      io.to(socketId).emit('start-quiz', quiz.getQuestions());
    }
  }
};
