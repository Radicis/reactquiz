const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const { socketPort } = require('../server/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = require('./api/routes');

// mount api routes
app.use('/', router);

const server = require('http').createServer(app);
const io = socketIO(server, { origins: '*:*' }).listen(server);

server.listen(socketPort);

// Import event handlers
const {
  joinQuiz,
  startQuiz,
  setPlayerReady,
  setAnswerForQuestion,
  handleDisconnect,
  kickPlayer,
  setPlayerComplete
} = require('./websocket/events');

// Import middleware
const { middleware } = require('./websocket/middleware');
const { checkIsOwner, requirePlayer, requireQuiz } = middleware;

io.on('connection', socket => {
  let playerId, quizId;
  socket.on(
    'join-quiz',
    ({ quizId: socketQuizId, playerId: socketPlayerId }) => {
      playerId = socketPlayerId;
      quizId = socketQuizId;
      joinQuiz({ socket, io, quizId, playerId }, requireQuiz, requirePlayer);
    }
  );

  socket.on('set-player-ready', () => {
    setPlayerReady(
      { socket, io, playerId, quizId },
      requireQuiz,
      requirePlayer
    );
  });

  socket.on('start-quiz', () => {
    // create a new question set and reset scores then emit new values to clients
    startQuiz(
      { socket, io, playerId, quizId },
      requirePlayer,
      requireQuiz,
      checkIsOwner
    );
  });

  socket.on(
    'set-player-answer-for-question',
    ({ questionIndex, isCorrect, answeredTime, playerAnswer }) => {
      setAnswerForQuestion(
        {
          socket,
          io,
          playerId,
          quizId,
          questionIndex,
          isCorrect,
          answeredTime,
          playerAnswer
        },
        requirePlayer,
        requireQuiz
      );
    }
  );

  socket.on('set-player-complete', () => {
    setPlayerComplete(
      { socket, io, playerId, quizId },
      requirePlayer,
      requireQuiz
    );
  });

  socket.on('kick-player', ({ playerIdToKick }) => {
    kickPlayer(
      { socket, io, playerId, quizId, playerIdToKick },
      requirePlayer,
      requireQuiz,
      checkIsOwner
    );
  });

  // When a client is disconnected, remove it from the list and broadcast updated player list
  socket.on('disconnect', () => {
    handleDisconnect(
      { socket, io, playerId, quizId },
      requirePlayer,
      requireQuiz
    );
  });
});

module.exports = app;
