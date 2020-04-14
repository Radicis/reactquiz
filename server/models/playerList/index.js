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
		return player;
	}

	/**
	 * Removes a player from the list by id
	 * @param id - uuid string
	 */
	removePlayer (id) {
		this.players.splice(this.players.findIndex(p => p.id === id), 1);
	}

	setOwner(id) {
		this.findPlayerById(id).setIsOwner();
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

	/**
	 * Resets all [layers scores to 0
	 */
	resetScores () {
		this.players.forEach(p => p.score = 0);
	}

	/**
	 * Checks if a given player is id the owner of the quiz (currently global)
	 * @param id
	 * @returns {T|*|boolean}
	 */
	checkIsOwner (id) {
		const player = this.findPlayerById(id);
		return player && player.isOwner;
	}
}

module.exports = new PlayerList(); // singleton
