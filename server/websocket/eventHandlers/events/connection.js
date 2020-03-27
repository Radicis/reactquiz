const Player = require('../../../models/player');
const playerList = require('../../../models/playerList');

module.exports = {
	name: 'connection',
	method: (socket, io)=> {
		const { id } = socket;

		console.log(`Client ${id} Connected`);

		// Add the player to the PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
		playerList.addPlayer(new Player({name: 'UNKNOWN', id}));

		// Broadcast the player list to all connected sockets
		io.sockets.emit('players', playerList.getPlayers());

		// When a client is disconnected, remove it from the list and broadcast updated player list
		socket.on('disconnect', () => {
			playerList.removePlayer(id);
			io.sockets.emit('players', playerList.getPlayers());
		});
	}
};
