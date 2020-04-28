const QuizList = require('../../models/quizList');

module.exports = {
  name: 'requireQuiz',
  method: (options) => {
    const { socket } = options;
    // Check for existing w/query string
    const { query } = socket.handshake;
    const { quizId } = query;
    let quiz;
    if (quizId) {
      quiz = QuizList.getQuiz(quizId);
    } else {
      // look it up from the sockets rooms
      const { rooms } = socket;
      const quizRoom = Object.keys(rooms)[0];
      if (quizRoom) {
        quiz = QuizList.getQuiz(quizRoom);
      }
    }
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    options.quiz = quiz;
    return options;
  }
};
