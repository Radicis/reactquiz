const playerList = require('../../models/playerList');

const { playerTimeout = 1000 * 60 } = require('../../config');

module.exports = {
	name: 'handleDisconnect',
	method: ({io, socket}) => {
		// Wait for the specified timeout then delete the player to allow for reconnects w/cookies
		setTimeout(() => {
			const {id} = socket;
			playerList.removePlayer(id);
			console.log(`Removing player ${id} as they timed out`);
			io.sockets.emit('players', playerList.getPlayers());
		}, playerTimeout);
	}
};
