const questionList = require('../../../models/questionList');

module.exports = {
	name: 'start-quiz',
	method: io => {
		console.log('Starting Quiz');

		// get a new list of random questions
		questionList.setQuestions();

		// get the first question
		questionList.setActiveQuestion();

		const activeQuestions = questionList.getActiveQuestion();

		io.sockets.emit('start-quiz');
		io.sockets.emit('next-questions', activeQuestions);
	}
};
