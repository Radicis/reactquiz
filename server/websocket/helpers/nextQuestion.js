const { defaultQuestionTime } = require('../../config');
const QuizList = require('../../models/quizList');

module.exports = {
  name: 'nextQuestion',
  method: options => {
    const { io, question } = options;
    const { questionTime = defaultQuestionTime } = question;

    io.sockets.emit('next-question', question);

    // being the timer before the answer is sent
    setTimeout(() => {
      const quiz = QuizList.getQuiz('test');
      // Calculate and Update the scores
      quiz.calculateScoresForActiveQuestion();
      // Send the answer along with the updated scores to sockets
      io.sockets.emit('show-answer');
      // Broadcast the player list to ALL connected sockets
      io.sockets.emit('players', quiz.getPlayers());
    }, questionTime);
  }
};
