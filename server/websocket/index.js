const socketIO = require('socket.io');
const server = require('http').createServer();

const QuizList = require('../models/quizList');

// Create the websocket server and set cors
const io = socketIO(server, { origins: '*:*' });

// Import event handlers
const {
  connection,
  setName,
  startQuiz,
  setNextActiveQuestion,
  setAnswerForActiveQuestion,
  handleDisconnect
} = require('./events');

// Import middleware
const { middleware } = require('./middleware');
const { getPlayer, checkIsOwner } = middleware;

// Listen for connection events to create new players and set event listeners for that socket
io.on('connection', (socket) => {
  connection({ socket, io });

  // Listen for the set-name event to properly set a player name and update it from UNKNOWN
  socket.on('set-name', ({ name }) => {
    const { id } = socket;
    setName({ io, playerId: id, name });
  });

  socket.on('start-quiz', () => {
    const { id } = socket;
    // create a new question set and reset scores then emit new values to clients
    startQuiz({ io, playerId: id }, getPlayer, checkIsOwner);
  });

  socket.on('set-player-answer-for-question', ({ questionId, isCorrect }) => {
    const { id } = socket;
    setAnswerForActiveQuestion(
        { socket, io, playerId: id, questionId, isCorrect },
        getPlayer
    );
  });

  // When a client is disconnected, remove it from the list and broadcast updated player list
  socket.on('disconnect', () => {
    const { id } = socket;
    handleDisconnect({ io, playerId: id }, getPlayer);
  });
});

module.exports = server;
