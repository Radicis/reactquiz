const {apply} = require('../middleware');

const QuizList = require('../../models/quizList');

module.exports = {
  name: 'setAnswerForQuestion',
  method: (options, ...args) => {
	try {
	  options = apply(options, args);
	} catch (e) {
	  console.log(e);
	  return false;
	}
	const {io, player, questionIndex, isCorrect} = options;

	const quiz = QuizList.getQuiz('test');

	quiz.setPlayerAnswerForQuestion({player, questionIndex, isCorrect});

	io.sockets.emit('update-player', player);

  }
};
