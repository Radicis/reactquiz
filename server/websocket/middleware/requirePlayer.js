const SocketError = require('../helpers/socketError');
const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'requirePlayer',
  method: options => {
    const { playerId } = options;

    const player = GlobalPlayerList.findPlayerById(playerId);

    if (!player) {
      throw new SocketError({ message: 'Player not found', exit: true });
    }

    options.player = player;
    return options;
  }
};
