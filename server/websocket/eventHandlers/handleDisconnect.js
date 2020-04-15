const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');

const { apply } = require('../middleware');

const { playerTimeout = 1000 * 60 } = require('../../config');

module.exports = {
	name: 'handleDisconnect',
	method: (options, ...args) => {
		try {
			options = apply(options, args);
		} catch (e) {
			console.log(e);
			return false;
		}
		const { io, player } = options;
		const { id: playerId, name, quizId = 'test' } = player;
		console.log(`Player ${playerId} : ${name} disconnected`);
		// Wait for the specified timeout then delete the player to allow for reconnects w/cookies
		setTimeout(() => {
			const quiz = QuizList.getQuiz(quizId);
			GlobalPlayerList.removePlayer(playerId);
			const remainingPlayers = quiz.getPlayers();
			// if the removed player was the owner then promote the new 0 index player
			if (quiz.checkIsOwner(playerId)) {
				const newOwner = remainingPlayers[0];
				if (newOwner) {
					quiz.setOwner(newOwner.id);
				}
			}
			console.log(`Removing player ${playerId} as they timed out`);
			io.sockets.emit('players', remainingPlayers);
			console.log(`${remainingPlayers.length} players remain`);
		}, playerTimeout);
	}
};
