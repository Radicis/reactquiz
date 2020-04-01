const socketIO = require('socket.io');
const server = require('http').createServer();

const playerList = require('../models/playerList');

// Create the websocket server and set cors
const io = socketIO(server, {origins: '*:*'});

// Import event handlers
const {connection, setName, startQuiz, setActiveQuestion, getAnswer, handleDisconnect} = require('./events');

// Import middleware
const { middleware } = require('./middleware');
const { getPlayer, checkIsOwner } = middleware;

// Listen for connection events to create new players and set event listeners for that socket
io.on('connection', socket => {
	connection({socket, io});

	// Listen for the set-name event to properly set a player name and update it from UNKNOWN
	socket.on('set-name', ({id, name}) => {
		setName({id, name});
		// Broadcast the player list to ALL connected sockets to update the players list
		io.sockets.emit('players', playerList.getPlayers())
	});

	socket.on('start-quiz', ({id}) => {
		// create a new question set and reset scores then emit new values to clients
		startQuiz({io, id}, getPlayer, checkIsOwner);
	});

	// Listen for set-next-question events and set the active question in the question list
	socket.on('set-next-question', ({id}) => {
		setActiveQuestion({io, id}, getPlayer, checkIsOwner);
	});

	// Listen for get-answer events and display in the ui
	socket.on('get-answer', ({id}) => {
		getAnswer({io, id}, getPlayer, checkIsOwner);
	});

	// Listen for set-next-question events and set the active question in the question list
	socket.on('set-next-question', ({id}) => {
		setActiveQuestion({io, id}, getPlayer, checkIsOwner);
	});

	// When a client is disconnected, remove it from the list and broadcast updated player list
	socket.on('disconnect', socket => {
		handleDisconnect({io, socket});
	});
});

module.exports = server;
