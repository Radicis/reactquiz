const SocketError = require('../helpers/socketError');
const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'requirePlayer',
  method: options => {
    const { socket, playerId } = options;

    const { playerId: storedPlayerId } = socket.handshake.query;

    let player;

    if (storedPlayerId) {
      player = GlobalPlayerList.findPlayerById(storedPlayerId);
      if (player) {
        player.setActiveSocketId(playerId);
      }
    }

    if (!player) {
      player = GlobalPlayerList.findPlayerById(playerId);
    }

    if (!player) {
      throw new SocketError({ message: 'Player not found', exit: true });
    }

    options.player = player;
    return options;
  }
};
