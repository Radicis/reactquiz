const { apply } = require('../middleware');

const QuizList = require('../../models/quizList');

module.exports = {
	name: 'setActiveQuestion',
	method: (options, ...args) => {
		try {
			apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { io }  = options;
		console.log('Setting active question');

		// get the next unanswered question for this session and set it as active

		const quiz = QuizList.getQuiz('test');

		quiz.setActiveQuestion();
		const activeQuestion = quiz.getActiveQuestion();
		if (activeQuestion) {
			io.sockets.emit('next-question', activeQuestion);
		} else {
			io.sockets.emit('quiz-complete');
		}
	}
};
