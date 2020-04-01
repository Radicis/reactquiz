const questionList = require('../../models/questionList');

const { apply } = require('../middleware');

module.exports = {
	name: 'getAnswer',
	method: ({io, id}, ...args) => {
		try {
			apply({io, id}, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		console.log('Getting answer');
		const activeQuestion = questionList.getActiveQuestion();
		if (activeQuestion) {
			const answer = questionList.getAnswer(activeQuestion.id);
			if (typeof answer !== undefined) {
				io.sockets.emit('show-answer', answer)
			} else {
				io.sockets.emit('error', 'No answer found');
			}
		} else {
			io.sockets.emit('error', 'No active question');
		}
	}
};
