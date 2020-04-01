const questionList = require('../../models/questionList');

const { apply } = require('../middleware');

module.exports = {
	name: 'setActiveQuestion',
	method: ({io, id}, ...args) => {
		try {
			apply({io, id}, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		console.log('Setting active question');
		// get the next unanswered question for this session and set it as active
		questionList.setActiveQuestion();
		const activeQuestion = questionList.getActiveQuestion();
		if (activeQuestion) {
			io.sockets.emit('next-question', activeQuestion);
		} else {
			io.sockets.emit('quiz-complete');
		}
	}
};
