const socketIO = require('socket.io');
const server = require('http').createServer();

const playerList = require('../models/playerList');

// Create the websocket server and set cors
const io = socketIO(server, {origins: '*:*'});

// Import event handlers
const {connection, setName, startQuiz, setActiveQuestion, getAnswer} = require('./eventHandlers');

// Listen for connection events to create new players
io.on('connection', socket => {
	connection({socket, io});

	// Listen for the set-name event to properly set a player name and update it from UNKNOWN
	socket.on('set-name', ({id, name}) => {
		setName({id, name});
		// Broadcast the player list to ALL connected sockets EXCEPT the one that triggered it
		io.sockets.emit('players', playerList.getPlayers())
	});

	socket.on('start-quiz', () => {
		// create a new question set and reset scores then emit new values to clients
		startQuiz(io);
	});

	// Listen for set-next-question events and set the active question in the question list
	socket.on('set-next-question', () => {
		setActiveQuestion(io);
	});

	// Listen for get-answer events and display in the ui
	socket.on('get-answer', () => {
		getAnswer(io);
	});

	// When a client is disconnected, remove it from the list and broadcast updated player list
	socket.on('disconnect', (socket) => {
		const {id} = socket;
		playerList.removePlayer(id);
		console.log(`Removing player ${id}`);
		io.sockets.emit('players', playerList.getPlayers());
	});
});

module.exports = server;
