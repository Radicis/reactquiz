const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'getPlayer',
  method: (options) => {
    const { socket, playerId } = options;
    // Check for existing w/query string
    const { query } = socket.handshake;
    const { playerId: existingPlayerId } = query;

    let player;

    if (existingPlayerId) {
      player = GlobalPlayerList.findPlayerById(existingPlayerId);
    } else {
      player = GlobalPlayerList.findPlayerById(playerId);
    }

    if (player) {
      options.player = player;
    }
    return options;
  }
};
