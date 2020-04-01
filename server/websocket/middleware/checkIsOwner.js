const playerList = require('../../models/playerList');

module.exports = {
	name: 'checkIsOwner',
	method: (options) => {
		const { id } = options;
		// if owner or the only one there
		if (playerList.checkIsOwner(id) || playerList.getPlayers().length === 1) {
			return options;
		}
		throw new Error('Player is not owner');
	}
};
