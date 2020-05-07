const QuestionList = require('../questionList');
const PlayerList = require('../playerList');
const Player = require('../player');
const GlobalPlayerList = require('../../models/playerList/global');

/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */
Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize){
    var temporal = [];

    for (let i = 0; i < this.length; i+= chunkSize){
      temporal.push(this.slice(i,i+chunkSize));
    }

    return temporal;
  }
});

/**
 * Class to encapsulate quiz functionality
 */
class Quiz {
  constructor() {
    this.id = Math.floor(1000 + Math.random() * 9000);
    this.questionList = new QuestionList();
    // split up the questions into equal rounds
    // this.rounds = this.questionList.getQuestions().chunk(this.questionList.getQuestions().length);
    // this.currentRound = 0;
    this.playerList = new PlayerList();
    this.answers = this.questionList.getQuestions().reduce((acc, curr, id) => {
      acc[id] = [];
      return acc;
    }, {});
  }

  setInProgress(val) {
    this.inProgress = val;
  }

  isInProgress () {
    return this.inProgress
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
    this.answers = this.questionList.getQuestions().reduce((acc, curr, id) => {
      acc[id] = [];
      return acc;
    }, {});
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

  resetPlayers() {
    this.calculated = false;
    this.playerList.resetPlayers();
  }

  findPlayerById(playerId) {
    return this.playerList.findPlayerById(playerId);
  }

  /**
   * Add a player to the local player list for this quiz
   * @param name
   * @param dontAddToGlobal
   */
  addPlayer(name, dontAddToGlobal) {
    const player = new Player({ name });
    const { id: playerId } = player;
    // Add the player to the Global PlayerList with UNKNOWN as the name. We need to listen for a set name event later to set it
    if (!dontAddToGlobal) {
      GlobalPlayerList.addPlayer(player);
    }
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
    // try not to do this twice..
    if (!this.calculated) {
      this.calculated = true;
      Object.keys(this.answers).forEach((questionId, val) => {
        const answers = this.answers[questionId];
        if (Array.isArray(answers)) {
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
  }

  getTimeScore({ answers, playerId }) {
    const threshold = 500; // 500 ms for latency
    // fastest or so close it doesn't matter gets 2 points;
    const playerAnswer = answers.find(a => a.playerId === playerId);
    const { answeredTime: fastestTime } = answers[0];
    if (playerAnswer) {
      const { answeredTime } = playerAnswer;
      if (
        answeredTime <= fastestTime ||
        answeredTime - fastestTime <= threshold
      ) {
        return 2;
      }
      const timeValue = fastestTime / (answeredTime - fastestTime - threshold);
      const timeRatio = Math.round(timeValue);
      return timeRatio;
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
