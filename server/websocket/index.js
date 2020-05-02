const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = require('http').createServer(app);

// Create the websocket server and set cors
const io = socketIO(server, { origins: '*:*' });

// Import event handlers
const {
  joinQuiz,
  startQuiz,
  setPlayerReady,
  setAnswerForQuestion,
  handleDisconnect,
  setPlayerComplete
} = require('./events');

// Import middleware
const { middleware } = require('./middleware');
const { checkIsOwner, requirePlayer, requireQuiz } = middleware;

const QuizList = require('../models/quizList');

app.post('/', (req, res) => {
  const { name } = req.body;
  // Create a new quiz
  const newQuiz = QuizList.addQuiz();
  const { id: quizId } = newQuiz;
  const { id: playerId } = newQuiz.addPlayer(name);
  return res.json({ playerId, quizId });
});

// Check if quiz is active
app.get('/:quizId', (req, res) => {
  const { quizId } = req.params;
  if (QuizList.getQuiz(quizId)) {
    return res.json('OK');
  }
  return res.status(404).send('Not active');
});

// Join quiz
app.post('/:quizId', (req, res) => {
  const { quizId } = req.params;
  const { name } = req.body;
  const quiz = QuizList.getQuiz(quizId);
  if (quiz) {
    const { id: quizId } = quiz;
    const { id: playerId } = quiz.addPlayer(name);
    return res.json({ quizId, playerId });
  }
  return res.status(404).send('Quiz Not Found');
});

// Listen for connection events to create new players and set event listeners for that socket
io.on('connection', socket => {
  socket.on('join-quiz', ({ quizId, playerId }) => {
    joinQuiz({ socket, io, quizId, playerId }, requireQuiz, requirePlayer);
  });

  socket.on('set-player-ready', ({ quizId, playerId }) => {
    setPlayerReady(
      { socket, io, playerId, quizId },
      requireQuiz,
      requirePlayer
    );
  });

  socket.on('start-quiz', ({ quizId, playerId }) => {
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
    ({ playerId, quizId, questionIndex, isCorrect }) => {
      setAnswerForQuestion(
        { socket, io, playerId, quizId, questionIndex, isCorrect },
        requirePlayer,
        requireQuiz
      );
    }
  );

  socket.on('set-player-complete', ({ playerId, quizId }) => {
    setPlayerComplete(
      { socket, io, playerId, quizId },
      requirePlayer,
      requireQuiz
    );
  });

  // // When a client is disconnected, remove it from the list and broadcast updated player list
  // socket.on('disconnect', () => {
  //   handleDisconnect({ socket, io }, requirePlayer);
  // });
});

module.exports = { app, server };
