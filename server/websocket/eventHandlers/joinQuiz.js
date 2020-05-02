const { apply } = require('../middleware');

module.exports = {
  name: 'joinQuiz',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { socket, io, player, quiz } = options;

    const { id: quizId } = quiz;
    const { id: socketId } = socket;

    // Leave any player specific one so it doesn't pollute the rooms list
    const { name } = player;
    console.log(`Player ${name} joined quiz ${quizId}`);

    // Socket joined quiz
    socket.join(quizId);

    io.to(socketId).emit('join-quiz', player);

    // Broadcast the player list to ALL connected sockets
    const quizPlayers = quiz.getPlayers();
    io.to(quizId).emit('players', quiz.getPlayers());
  }
};
