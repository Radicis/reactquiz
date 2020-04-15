const { apply } = require('../middleware');
const { nextQuestion } = require('../helpers');

const QuizList = require('../../models/quizList');

module.exports = {
	name: 'startQuiz',
	method: (options, ...args) => {
		try {
			apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}

		const { io } = options;

		console.log('Starting Quiz');

		const quiz = QuizList.getQuiz('test');

		// get the first question
		quiz.setActiveQuestion();

		const activeQuestion = quiz.getActiveQuestion();

		io.sockets.emit('start-quiz');

		nextQuestion({io, question: activeQuestion});
	}
};
