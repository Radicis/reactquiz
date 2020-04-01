const playerList = require('../../models/playerList');

const { playerTimeout = 1000 * 60 } = require('../../config');

module.exports = {
	name: 'handleDisconnect',
	method: ({io, id}) => {
		console.log(`Player ${id} disconnected`);
		// Wait for the specified timeout then delete the player to allow for reconnects w/cookies
		setTimeout(() => {
			playerList.removePlayer(id);
			console.log(`Removing player ${id} as they timed out`);
			io.sockets.emit('players', playerList.getPlayers());
			console.log(`${playerList.getPlayers().length} players remain`);
		}, playerTimeout);
	}
};
