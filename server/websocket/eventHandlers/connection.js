const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');
const Player = require('../../models/player');

module.exports = {
  name: 'connection',
  method: (options) => {
    const { socket, io } = options;
    const { id: playerId } = socket;

    // TODO: check for existing w/cookie

    console.log(`Client ${playerId} Connected`);

    const quiz = QuizList.getQuiz('test');

    const newPlayer = new Player({ id: playerId });

    // Add the player to the Global PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
    GlobalPlayerList.addPlayer(newPlayer);

    // if this is the first player, they own the quiz
    if (quiz.getPlayers().length === 0) {
      console.log('Setting owner');
      quiz.setOwner(playerId);
    }

    // Add the reference to the quiz
    quiz.addPlayer(playerId);

    // Send the init-player event to the connected socket only
    socket.emit('init-player', newPlayer);

    // Broadcast the player list to ALL connected sockets
    io.sockets.emit('players', quiz.getPlayers());
  }
};
