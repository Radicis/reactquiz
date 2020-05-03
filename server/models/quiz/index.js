const UUID = require('uuid').v4;
const QuestionList = require('../questionList');
const PlayerList = require('../playerList');
const Player = require('../player');
const GlobalPlayerList = require('../../models/playerList/global');

/**
 * Class to encapsulate quiz functionality
 */
class Quiz {
  constructor(id) {
    this.id = id || UUID(); // allow to set the id manually
    this.questionList = new QuestionList();
    this.playerList = new PlayerList();
    this.answers = this.questionList.getQuestions().reduce((acc, curr, id) => {
      acc[id] = [];
      return acc;
    }, {});
  }

  setOwner(playerId) {
    this.owner = playerId;
    this.playerList.findPlayerById(playerId).setIsOwner();
  }

  checkIsOwner(playerId) {
    return this.owner === playerId;
  }

  reset() {
    this.questionList = new QuestionList();
    this.playerList.resetPlayers();
  }

  getQuestions() {
    return this.questionList.getQuestions();
  }

  /**
   * Returns the list of players in the quiz
   * @returns {*[]|Array}
   */
  getPlayers() {
    return this.playerList.getPlayers();
  }

  /**
   * Add a player to the local player list for this quiz
   * @param name
   */
  addPlayer(name) {
    const player = new Player({ name });
    const { id: playerId } = player;
    // Add the player to the Global PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
    GlobalPlayerList.addPlayer(player);
    if (this.playerList.getPlayers().length === 0) {
      this.setOwner(playerId);
    }
    this.playerList.addPlayer(playerId);
    return player;
  }

  allPlayersComplete() {
    return this.playerList.getPlayers().every(p => p.isComplete);
  }

  calculateScores() {
    Object.keys(this.answers).forEach((questionId, val) => {
      const answers = this.answers[questionId];
      if (Array.isArray(answers)) {
        const questionAnswer = this.questionList.getQuestions()[questionId];
        answers.forEach(answer => {
          const { playerId } = answer;
          const player = this.playerList.findPlayerById(playerId);
          if (player) {
            player.addScore(1);
            player.addScore(this.getTimeScore({ answers, playerId }));
          }
        });
      }
    });
  }

  getTimeScore({ answers, playerId }) {
    // fastest or so close it doesn't matter gets 2 points;
    const playerAnswer = answers.find(a => a.playerId === playerId);
    const { answeredTime: fastestTime } = answers[0];
    if (playerAnswer) {
      const { answeredTime } = playerAnswer;
      if (answeredTime === fastestTime) {
        return 2;
      }
      const timeRatio = fastestTime / (answeredTime - fastestTime);
      console.log(timeRatio);
    }
  }

  setPlayerAnswerForQuestion({
    player,
    questionIndex,
    isCorrect,
    playerAnswer,
    answeredTime
  }) {
    const { id: playerId } = player;
    if (isCorrect) {
      this.answers[questionIndex].push({
        playerId,
        playerAnswer,
        answeredTime
      });
      player.incrementProgress();
      return player.getProgress();
    }
  }
}

module.exports = Quiz;
