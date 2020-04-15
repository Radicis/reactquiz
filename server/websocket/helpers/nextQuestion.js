const { defaultQuestionTime } = require('../../config');

module.exports = {
	name: 'nextQuestion',
	method: (options) => {
		const {io, question} = options;
		const { questionTime = defaultQuestionTime } = question;

		io.sockets.emit('next-question', question);

		// being the timer before the answer is sent
		setTimeout(() => {
			// Send the answer along with the updated scores to sockets
			io.sockets.emit('show-answer');
		}, questionTime);
	}
};
