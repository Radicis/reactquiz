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

	quiz.setPlayerAnswerForQuestion({player, questionIndex, isCorrect});

	const nextQuestion = quiz.getNextQuestion(questionIndex);

	if (nextQuestion) {
	  io.to(playerId).emit('next-question', {...nextQuestion, id: questionIndex + 1});
	} else {
	  io.sockets.emit('player-complete');
	}

  }
};
