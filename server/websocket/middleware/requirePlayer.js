const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'requirePlayer',
  method: options => {
    const { playerId } = options;

    const player = GlobalPlayerList.findPlayerById(playerId);

    if (!player) {
      throw new Error('Player not found');
    }

    options.player = player;
    return options;
  }
};
