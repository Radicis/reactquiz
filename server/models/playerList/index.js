/**
 * Class to encapsulate player functionality
 */
class PlayerList {
	constructor () {
		this.players = [];
	}

	/**
	 * Adds a player to the list
	 * @param player - player object
	 */
	addPlayer (player) {
		this.players.push(player);
	}

	/**
	 * Removes a player from the list by id
	 * @param id - uuid string
	 */
	removePlayer (id) {
		this.players.splice(this.players.findIndex(p => p.id === id), 1);
	}

	/**
	 * Returns the players array
	 * @returns {[]|Array}
	 */
	getPlayers () {
		return this.players
	}

	/**
	 * Finds a player in the list by id
	 * @param id
	 * @returns {T}
	 */
	findPlayerById (id) {
		return this.players.find(p => p.id === id);
	}
}

module.exports = new PlayerList(); // singleton
