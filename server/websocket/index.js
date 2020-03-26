const socketIO = require('socket.io');
const server = require('http').createServer();
const playerList = require('../models/playerList');
const Player = require('../models/player');

// Create the websocket server and set cors
const io = socketIO(server, {origins: '*:*'});

// Listen for connection events to create new players
io.on('connection', (socket) => {
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
});

// Listen for the set-name event to properly set a player name and update it from UNKNOWN
io.on('set-name', ({name, id}) => {
	// Find the player in the list
	const player = playerList.findPlayerById(id);
	if (player) {
		player.setName(name);
		console.log(`Setting player name to ${name}`);
	}
});

module.exports = server;
