const questionList = require('../../../models/questionList');

module.exports = {
	name: 'setActiveQuestion',
	method: io => {
		// get the next unanswered question for this session and set it as active
		questionList.setActiveQuestion();
		const activeQuestion = questionList.getActiveQuestion();
		if (activeQuestion) {
			io.sockets.emit('active-question', activeQuestion)
		} else {
			io.sockets.emit('quiz-complete');
		}
	}
};
