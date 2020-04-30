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
  }

  setOwner (playerId) {
    this.owner = playerId;
    this.playerList.findPlayerById(playerId).setIsOwner();
  }

  checkIsOwner (playerId) {
    return this.owner === playerId
  }

  reset() {
    this.questionList = new QuestionList();
    this.playerList.resetPlayers();
  }

  getQuestions () {
    return this.questionList.getQuestions()
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

  /**
   * Calculates and assigns the scores for the active question
   */
  calculateScoresForPlayer() {
    this.questionList.getQuestions().forEach(question => {
      const { answer, answerType, answers } = question;
      for (let [playerId, value] of Object.entries(answers)) {
        let correct = false;
        // find the player in the local player list
        const player = this.playerList.findPlayerById(playerId);
        if (player) {
          const { answer, time } = value;
          const playerAnswer = answer;

          // Determine if score it to be awarded based on the answerType
          switch (answerType) {
          case 'MULTI':
            if (answer === playerAnswer) {
              correct = true;
            }
            break;
          case 'BOOL':
            if (answer === playerAnswer) {
              correct = true;
            }
            break;
          default:
            break;
          }

          let scoreToAdd = 0;

          if (correct) {
            const speedRatio = this.getSpeedRatio({playerId, answers});
            // check how fast they were in relation to the other players
            scoreToAdd = 1 * speedRatio;
          }

          // Update the players score
          player.setScore(player.score + scoreToAdd);
        }
      }
    });
  }

  getSpeedRatio ({playerId, answers}) {
    // get all speeds of correct answers

    // get the players speed
  }

  setPlayerAnswerForQuestion({ player, questionIndex, isCorrect, playerAnswer, answeredTime }) {
    const questionAnswers = this.questionList[questionIndex];
    if (isCorrect && questionAnswers) {
      const { id: playerId } = player;
      questionAnswers.push({
        playerId,
        playerAnswer,
        isCorrect,
        answeredTime
      });
    }
    player.incrementProgress();
    return player.getProgress();
  }
}

module.exports = Quiz;
