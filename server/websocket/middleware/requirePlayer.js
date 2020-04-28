const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'requirePlayer',
  method: options => {
    const { socket, playerId } = options;
    // Check for existing w/query string
    const { query } = socket.handshake;
    const { playerId: existingPlayerId } = query;

    let player;

    if (existingPlayerId) {
      player = GlobalPlayerList.findPlayerById(existingPlayerId);
    }

    if (!player) {
      player = GlobalPlayerList.findPlayerById(playerId);
    }

    if (!player) {
      throw new Error('Player not found');
    }

    options.player = player;
    return options;
  }
};
