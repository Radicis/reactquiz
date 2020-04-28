const socketIO = require('socket.io');
const server = require('http').createServer();

// Create the websocket server and set cors
const io = socketIO(server, { origins: '*:*' });

// Import event handlers
const {
  connection,
  setName,
  startQuiz,
  setPlayerReady,
  setAnswerForQuestion,
  handleDisconnect,
} = require('./events');

// Import middleware
const { middleware } = require('./middleware');
const { getPlayer, checkIsOwner, getQuiz, requirePlayer, requireQuiz } = middleware;

// Listen for connection events to create new players and set event listeners for that socket
io.on('connection', (socket) => {
  connection({ socket, io }, getQuiz, getPlayer);

  // Listen for the set-name event to properly set a player name and update it from UNKNOWN
  socket.on('set-name', ({ name }) => {
    const { id: playerId } = socket;
    setName({ socket, io, playerId, name }, requirePlayer);
  });

  socket.on('set-player-ready', () => {
    const { id: playerId } = socket;
    setPlayerReady({ socket, io, playerId }, requireQuiz, requirePlayer);
  });

  socket.on('start-quiz', () => {
    const { id: playerId } = socket;
    // Check for existing w/query string
    const { query } = socket.handshake;
    const { quizId } = query;
    // create a new question set and reset scores then emit new values to clients
    startQuiz({ socket, io, playerId, quizId }, requirePlayer, requireQuiz, checkIsOwner);
  });

  socket.on('set-player-answer-for-question', ({ questionIndex, isCorrect }) => {
    const { id: playerId } = socket;
    setAnswerForQuestion(
        { socket, io, playerId, questionIndex, isCorrect }, requirePlayer, requireQuiz
    );
  });

  // When a client is disconnected, remove it from the list and broadcast updated player list
  socket.on('disconnect', () => {
    const { id: playerId } = socket;
    handleDisconnect({ socket, io, playerId }, requirePlayer);
  });
});

module.exports = server;
