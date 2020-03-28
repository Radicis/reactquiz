const socketIO = require('socket.io');
const server = require('http').createServer();

// Create the websocket server and set cors
const io = socketIO(server, {origins: '*:*'});

// Import event handlers
const { connection, setName, startQuiz, setActiveQuestion, getAnswer } = require('./eventHandlers');

// Listen for connection events to create new players
io.on('connection', socket => {
	connection(socket, io);
});

// Listen for the set-name event to properly set a player name and update it from UNKNOWN
io.on('set-name', setName);


io.on('start-quiz', () => {
	// create a new question set and reset scores then emit new values to clients
	startQuiz(io);
});

// Listen for set-next-question events and set the active question in the question list
io.on('set-next-question', () => {
	setActiveQuestion(io);
});

// Listen for get-answer events and display in the ui
io.on('get-answer', () => {
	getAnswer(io);
});

module.exports = server;
