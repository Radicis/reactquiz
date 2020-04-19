const GlobalPlayerList = require('../../models/playerList/global');

module.exports = {
  name: 'setName',
  method: (options) => {
    const { playerId, name } = options;
    // Find the player in the list
    const player = GlobalPlayerList.findPlayerById(playerId);
    if (player) {
      player.setName(name);
      console.log(`Setting player name to ${name}`);
    }
  }
};
