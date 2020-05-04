const { apply } = require('../middleware');
const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'kickPlayer',
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
    const { io, quiz, playerIdToKick } = options;

    const { id: quizId } = quiz;

    const playerToKick = GlobalPlayerList.findPlayerById(playerIdToKick)

    const { name } = playerToKick;

    console.log(`Player ${name} kicked from quiz ${quizId}`);

    GlobalPlayerList.removePlayer(playerIdToKick);

    io.to(quizId).emit('kicked', playerIdToKick);

    // Broadcast the player list to ALL connected sockets
    io.to(quizId).emit('players', quiz.getPlayers());
  }
};
