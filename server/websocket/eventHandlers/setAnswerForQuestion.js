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
	const {id: playerId} = player;

	const quiz = QuizList.getQuiz('test');

	const progress = quiz.setPlayerAnswerForQuestion({player, questionIndex, isCorrect});

	io.sockets.emit('player-progress', progress);

  }
};
