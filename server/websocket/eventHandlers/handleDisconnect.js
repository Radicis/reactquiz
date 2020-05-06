const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');

const { apply } = require('../middleware');

const { playerTimeout = 1000 * 30 } = require('../../config');

module.exports = {
  name: 'handleDisconnect',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      // ignore error
    }
    // const { io, player, quiz } = options;
    // const { id: playerId, name} = player;
    // console.log(`Player ${playerId} : ${name} disconnected`);
    // // Wait for the specified timeout then delete the player to allow for reconnects w/cookies
    // setTimeout(() => {
    //   GlobalPlayerList.removePlayer(playerId);
    //   const remainingPlayers = quiz.getPlayers();
    //   try {
    //     // if the removed player was the owner then promote the new 0 index player
    //     if (quiz.checkIsOwner(playerId) && remainingPlayers.length > 0) {
    //       const newOwner = remainingPlayers[0];
    //       if (newOwner) {
    //         quiz.setOwner(newOwner.id);
    //         const { id: quizId } = quiz;
    //         io.to(quizId).emit('players', quiz.getPlayers());
    //       }
    //     }
    //
    //     if (remainingPlayers.length === 0) {
    //       QuizList.removeQuiz(quizId);
    //     }
    //
    //   } catch (e) {}
    //   console.log(`Removing player ${name} ${playerId} as they timed out`);
    // }, playerTimeout);
  }
};
