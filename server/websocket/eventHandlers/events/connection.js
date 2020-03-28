const Player = require('../../../models/player');
const playerList = require('../../../models/playerList');

module.exports = {
	name: 'connection',
	method: ({socket, io}) => {
		const {id} = socket;

		// TODO: check for existing w/cookie

		console.log(`Client ${id} Connected`);

		let newPlayer = new Player({id});

		// if this is the first player, they own the quiz
		if (playerList.getPlayers().length === 0) {
			newPlayer.isOwner = true;
		}

		// Add the player to the PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
		const addedPlayer = playerList.addPlayer(newPlayer);

		// Send the init-player event to the connected socket only
		socket.emit('init-player', addedPlayer);

		// Broadcast the player list to ALL connected sockets
		io.sockets.emit('players', playerList.getPlayers());
	}
};
