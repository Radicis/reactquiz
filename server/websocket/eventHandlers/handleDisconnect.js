const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');

const { apply } = require('../middleware');

const { playerTimeout = 1000 * 60 } = require('../../config');

module.exports = {
	name: 'handleDisconnect',
	method: (options, ...args) => {
		try {
			apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { io, player } = options;
		const { id: playerId, name, isOwner, quizId = 'test' } = player;
		console.log(`Player ${playerId} : ${name} disconnected`);
		// Wait for the specified timeout then delete the player to allow for reconnects w/cookies
		setTimeout(() => {
			const quiz = QuizList.getQuiz(quizId);
			GlobalPlayerList.removePlayer(playerId);
			// if the removed player was the owner then promote
			if (isOwner) {
				const newOwner = quiz.getPlayers()[0];
				if (newOwner) {
					quiz.setOwner(newOwner.id);
				}
			}
			console.log(`Removing player ${playerId} as they timed out`);
			io.sockets.emit('players', quiz.getPlayers());
			console.log(`${quiz.getPlayers().length} players remain`);
		}, playerTimeout);
	}
};
