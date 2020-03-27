const playerList = require('../../../models/playerList');

module.exports = {
	name: 'setName',
	method: ({name, id}) => {
		// Find the player in the list
		const player = playerList.findPlayerById(id);
		if (player) {
			player.setName(name);
			console.log(`Setting player name to ${name}`);
		}
	}
};
