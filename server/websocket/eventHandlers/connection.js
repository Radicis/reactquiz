const { apply } = require('../middleware');
const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');
const Player = require('../../models/player');

module.exports = {
  name: 'connection',
  method: (options, ...args) => {
    try {
      options = apply(options, args);
    } catch (e) {
      console.log(e);
      return false;
    }
    const { socket, io, existingQuiz, player: existingPlayer } = options;
    const { id: playerId } = socket;

    let player;
    let quiz = existingQuiz;

    if (existingPlayer) {
      // Add the reference to the quiz
      player = existingPlayer
    }

    // if no existing player is found, create one
    if (!player) {
      player = new Player({ id: playerId });
      // Add the player to the Global PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
      GlobalPlayerList.addPlayer(player);
    }

    let ownerSet = false;

    if (!existingQuiz) {
      // Create a new quiz if not found or no quizId
      quiz = QuizList.addQuiz('My Quiz');
      // ste the owner for the new quiz
      console.log('Setting owner');
      const { id } = player
      quiz.setOwner(id);
      ownerSet = true;
    }

    // If this is the first player, they own the quiz
    if (!ownerSet && quiz.getPlayers().length === 0) {
      console.log('Setting owner');
      quiz.setOwner(playerId);
    }

    // Add the reference to the quiz
    quiz.addPlayer(playerId);

    console.log(`Client ${playerId} Connected`);

    const {id: quizId, name } = quiz;

    // Socket joined quiz
    socket.join(quizId);
    // Leave any player specific one so it doesn't pollute the rooms list
    socket.leave(playerId);
    console.log(`Player joined quiz ${quizId} for quiz ${name}`);

    // Send the init-player event to the connected socket only
    // This updates the playerId in the client's localstorage with the playerId also
    socket.emit('init-player', player);

    // Broadcast the player list to ALL connected sockets
    io.to(quizId).emit('players', quiz.getPlayers());
  }
};
