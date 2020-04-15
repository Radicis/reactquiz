const { apply } = require('../middleware');
const { nextQuestion } = require('../helpers');

const QuizList = require('../../models/quizList');

module.exports = {
	name: 'setNextActiveQuestion',
	method: (options, ...args) => {
		try {
			options = apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { io }  = options;
		console.log('Setting active question');

		const quiz = QuizList.getQuiz('test');

		quiz.setActiveQuestion();
		const activeQuestion = quiz.getNextActiveQuestion();
		if (activeQuestion) {
			nextQuestion({io, question: activeQuestion});
		} else {
			io.sockets.emit('quiz-complete');
		}
	}
};
