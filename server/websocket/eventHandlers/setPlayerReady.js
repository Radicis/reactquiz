const { apply } = require('../middleware');

module.exports = {
  name: 'setPlayerReady',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { io, player, quiz } = options;
    const { id: quizId } = quiz;
    player.setReady();
    console.log(`Setting player ${player.name} to ready`);
    // Broadcast the player list to ALL connected sockets to update the players list
    io.to(quizId).emit('update-player', player);
  }
};
