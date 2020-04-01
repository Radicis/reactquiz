const playerList = require('../../models/playerList');

const { apply } = require('../middleware');

module.exports = {
	name: 'setScores',
	method: ({io, players}, ...args) => {
		try {
			apply({io}, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		// Find the player in the list by it's id and update the score
		players.forEach(p => {
			const { id, score, name } = p;
			const player = playerList.findPlayerById(id);
			if (player) {
				player.setScore(score);
				console.log(`Setting player ${name}'s score to ${score}`);
			}
		});
	}
};
