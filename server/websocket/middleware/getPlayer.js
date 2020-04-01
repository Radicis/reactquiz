const playerList = require('../../models/playerList');

module.exports = {
	name: 'getPlayer',
	method: (options) => {
		const {id} = options;
		const player = playerList.findPlayerById(id);
		if (player) {
			return {...options, player};
		}
		throw new Error('Player not found');
	}
};
