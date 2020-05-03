const { apply } = require('../middleware');

module.exports = {
  name: 'startQuiz',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      const { socket, io } = options;
      const { id } = socket;
      const { message, exit } = e;
      io.to(id).emit('error', { message, exit });
      return false;
    }

    const { io, quiz } = options;
    quiz.reset();
    io.sockets.emit('start-quiz', quiz.getQuestions());
  }
};
