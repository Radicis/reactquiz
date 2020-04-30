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

    // Leave any player specific one so it doesn't pollute the rooms list
    const { name } = player;
    console.log(`Player ${name} joined quiz ${quizId}`);

    // Socket joined quiz
    socket.join(quizId);

    io.to(socket.id).emit('join-quiz');

    // Broadcast the player list to ALL connected sockets
    io.to(quizId).emit('players', quiz.getPlayers());
  }
};
