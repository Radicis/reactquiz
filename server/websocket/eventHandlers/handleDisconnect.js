const playerList = require('../../models/playerList');

const { apply } = require('../middleware');

const { playerTimeout = 1000 * 60 } = require('../../config');

module.exports = {
	name: 'handleDisconnect',
	method: (options, ...args) => {
		try {
			apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { io, player } = options;
		const { id, name, isOwner } = player;
		console.log(`Player ${id} : ${name} disconnected`);
		// Wait for the specified timeout then delete the player to allow for reconnects w/cookies
		setTimeout(() => {
			playerList.removePlayer(id);
			// if the removed player was the owner then promote
			if (isOwner) {
				const newOwner = playerList.getPlayers()[0];
				if (newOwner) {
					playerList.setOwner(newOwner.id);
				}
			}
			console.log(`Removing player ${id} as they timed out`);
			io.sockets.emit('players', playerList.getPlayers());
			console.log(`${playerList.getPlayers().length} players remain`);
		}, playerTimeout);
	}
};
