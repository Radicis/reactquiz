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
    const { io, player } = options;
    if (player) {
      player.setReady();
      console.log(`Setting player ${player.name} to ready`);
      // Broadcast the player list to ALL connected sockets to update the players list
      io.sockets.emit('update-player', player);
    }
  }
};
