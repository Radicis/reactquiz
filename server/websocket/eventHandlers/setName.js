const { apply } = require('../middleware');

module.exports = {
  name: 'setName',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { socket, io, name, quiz, player } = options;
    const { id: quizId } = quiz;
    if (player) {
      player.setName(name);
      console.log(`Setting player name to ${name}`);
      // Broadcast the player list to ALL connected sockets to update the players list
      io.sockets.emit('update-player', player);
      socket.emit('set-quiz', quizId);
    }
  }
};
