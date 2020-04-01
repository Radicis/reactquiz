const playerList = require('../../models/playerList');

module.exports = {
	name: 'getPlayer',
	method: (options, next) => {
		console.log(options);
		const {id} = options;
		const player = playerList.findPlayerById(id);
		if (player) {
			return next({...options, player});
		}
		throw new Error('Player not found');
	}
};
