const questionList = require('../../models/questionList');

module.exports = {
	name: 'getAnswer',
	method: ({io}) => {
		const activeQuestion = questionList.getActiveQuestion();
		const answer = questionList.getAnswer(activeQuestion.id);
		if (activeQuestion && typeof answer !== undefined) {
			io.sockets.emit('show-answer', answer)
		} else {
			io.sockets.emit('error', 'No answer found');
		}
	}
};
