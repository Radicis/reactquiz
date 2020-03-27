const socketIO = require('socket.io');
const server = require('http').createServer();

// Create the websocket server and set cors
const io = socketIO(server, {origins: '*:*'});

// Import event handlers
const { connection, setName } = require('./eventHandlers');

// Listen for connection events to create new players
io.on('connection', (socket) => {
	connection(socket, io);
});

// Listen for the set-name event to properly set a player name and update it from UNKNOWN
io.on('set-name', setName);


io.on('', setName);

module.exports = server;
