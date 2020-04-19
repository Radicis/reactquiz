const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'getPlayer',
  method: (options) => {
    const { playerId } = options;
    const player = GlobalPlayerList.findPlayerById(playerId);
    if (player) {
      return { ...options, player: { ...player } };
    }
    throw new Error('Player not found');
  }
};
