const questionList = require('../../models/questionList');

const { apply } = require('../middleware');

module.exports = {
	name: 'setAnswerForActiveQuestion',
	method: (options, ...args) => {
		try {
			apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { player, id, answer = null } = options;
		console.log(`Setting answer for active question for player: ${player.name}`);
		questionList.setAnswerForActiveQuestion({id, answer});
	}
};
