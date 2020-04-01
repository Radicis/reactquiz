const playerList = require('../../models/playerList');

module.exports = {
	name: 'setScores',
	method: ({players}) => {
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
