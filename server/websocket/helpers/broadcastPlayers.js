const { defaultQuestionTime } = require('../../config');

module.exports = {
	name: 'broadcastPlayers',
	method: (options) => {
		const {io, playerId} = options;
	}
};
