const playerList = require('../../models/playerList');

module.exports = {
	name: 'checkIsOwner',
	method: (options, next) => {
		const { id } = options;
		if (playerList.checkIsOwner(id)) {
			return next(null, options);
		}
		throw new Error('Player is not owner');
	}
};
