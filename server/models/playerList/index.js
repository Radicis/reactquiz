const GlobalPlayerList = require('./global');

/**
 * Class to encapsulate player list functionality
 */
class PlayerList {
	constructor () {
		this.playerIds = [];
	}

	/**
	 * Adds a player to the list
	 * @param playerId - player id
	 */
	addPlayer (playerId) {
		this.playerIds.push(playerId);
	}

	/**
	 * Removes a player from the list by id
	 * @param playerId - uuid string
	 */
	removePlayer (playerId) {
		this.playerIds.splice(this.playerIds.indexOf(playerId), 1);
	}

	/**
	 * Returns the players array enriched from the global list
	 * @returns {[]|Array}
	 */
	getPlayers () {
		let players = [];
		this.playerIds.forEach(id => {
			const player = GlobalPlayerList.findPlayerById(id);
			if (!player) {
				this.removePlayer(id);
			} else {
				players.push(player);
			}
		});
		return players;
	}

	/**
	 * Finds a player in the list by id
	 * @param playerId
	 * @returns {T}
	 */
	findPlayerById (playerId) {
		return GlobalPlayerList.findPlayerById(playerId);
	}
}

module.exports = PlayerList;
