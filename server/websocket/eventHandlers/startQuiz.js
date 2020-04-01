const questionList = require('../../models/questionList');
const playerList = require('../../models/playerList');

const { apply } = require('../middleware');

module.exports = {
	name: 'startQuiz',
	method: ({io}, ...args) => {
		try {
			apply({io}, args);
		} catch (e) {
			console.log(e);
			return false;
		}

		console.log('Starting Quiz');

		// Reset player scores
		playerList.resetScores();

		// get a new list of random questions and reset their answered values
		questionList.setQuestions();

		// get the first question
		questionList.setActiveQuestion();

		const activeQuestion = questionList.getActiveQuestion();

		io.sockets.emit('start-quiz');

		// send the active question to connected sockets
		io.sockets.emit('next-question', activeQuestion);
	}
};
