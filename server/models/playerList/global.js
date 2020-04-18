/**
 * Class to encapsulate global player list functionality
 */
class GlobalPlayerList {
  constructor() {
    this.playerList = {};
  }

  /**
   * Adds a player to the list
   * @param player - player object
   */
  addPlayer(player) {
    this.playerList[player.id] = player;
    return player;
  }

  /**
   * Removes a player from the list by id
   * @param playerId - uuid string
   */
  removePlayer(playerId) {
    delete this.playerList[playerId];
  }

  /**
   * Returns the players array
   * @returns {[]|Array}
   */
  getPlayers() {
    return this.playerList;
  }

  /**
   * Finds a player in the list by id
   * @param playerId
   * @returns {T}
   */
  findPlayerById(playerId) {
    return this.playerList[playerId] || null;
  }
}

module.exports = new GlobalPlayerList(); // singleton
