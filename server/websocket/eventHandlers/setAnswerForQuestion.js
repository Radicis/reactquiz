const { apply } = require('../middleware');

const QuizList = require('../../models/quizList');

module.exports = {
  name: 'setAnswerForActiveQuestion',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { socket, io, player, questionId, isCorrect } = options;
    const { id: playerId } = player;

    const quiz = QuizList.getQuiz('test');

    quiz.setPlayerAnswerForQuestion({ player, questionId, isCorrect });

    const nextQuestion = quiz.getNextQuestion();

    if (nextQuestion) {
      socket.broadcast.to(playerId).emit( 'next-question', nextQuestion );
    } else {
      io.sockets.emit('quiz-complete');
    }

  }
};
