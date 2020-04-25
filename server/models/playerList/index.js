const GlobalPlayerList = require('./global');

/**
 * Class to encapsulate player list functionality
 */
class PlayerList {
  constructor() {
    this.playerIds = [];
  }

  /**
   * Adds a player to the list
   * @param playerId - player id
   */
  addPlayer(playerId) {
    this.playerIds.push(playerId);
  }

  /**
   * Removes a player from the list by id
   * @param playerId - uuid string
   */
  removePlayer(playerId) {
    this.playerIds.splice(this.playerIds.indexOf(playerId), 1);
  }

  resetPlayers () {
    this.playerIds.forEach((id) => {
      const player = GlobalPlayerList.findPlayerById(id);
      if (player) {
        player.resetProgress();
      }
    });
  }

  /**
   * Returns the players array enriched from the global list
   * @returns {[]|Array}
   */
  getPlayers() {
    let players = [];
    let playersToRemove = [];
    this.playerIds.forEach((id) => {
      const player = GlobalPlayerList.findPlayerById(id);
      if (!player) {
        playersToRemove.push(id);
      } else {
        players.push(player);
      }
    });
    playersToRemove.forEach((id) => this.removePlayer(id));
    return players;
  }

  /**
   * Finds a player in the list by id
   * @param playerId
   * @returns {T}
   */
  findPlayerById(playerId) {
    return GlobalPlayerList.findPlayerById(playerId);
  }
}

module.exports = PlayerList;
