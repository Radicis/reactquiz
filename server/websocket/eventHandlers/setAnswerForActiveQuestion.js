const { apply } = require('../middleware');

const QuizList = require('../../models/quizList');

module.exports = {
	name: 'setAnswerForActiveQuestion',
	method: (options, ...args) => {
		try {
			options = apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { player, answer = null } = options;
		const { name, id: playerId } = player;

		const quiz = QuizList.getQuiz('test');

		console.log(`Setting answer: ${answer} for active question for player: ${name}`);
		quiz.setPlayerAnswerForActiveQuestion({playerId, answer});
	}
};
