const UUID = require('uuid').v4;
const { stringSimilarity } = require('string-similarity-js');
const QuestionList = require('../questionList');
const PlayerList = require('../playerList');

/**
 * Class to encapsulate quiz functionality
 */
class Quiz {
  constructor(name, id) {
    this.id = id || UUID(); // allow to set the id manually
    this.name = name || 'Untitled Quiz';
    this.questionList = new QuestionList();
    this.playerList = new PlayerList();
    this.ownerId = null;
    this.answers = {};
  }

  reset() {
    this.answers = {};
    this.questionList = new QuestionList();
  }

  setOwner(playerId) {
    this.ownerId = playerId;
  }

  checkIsOwner(playerId) {
    return this.ownerId === playerId;
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
   * @param playerId
   */
  addPlayer(playerId) {
    this.playerList.addPlayer(playerId);
  }

  /**
   * Getter for the active question
   * @returns {T | null}
   */
  getActiveQuestion() {
    return this.questionList.getActiveQuestion();
  }

  getNextActiveQuestion() {
    return this.questionList.getNextActiveQuestion();
  }

  /**
   * Determines which answer si closest to the number
   * @param playerAnswer
   * @param answers
   * @param answer
   * @returns {boolean}
   */
  isClosestNumber(playerAnswer, answers, answer) {
    const answerValues = Object.keys(answers).map((k) => answers[k]);
    const closest = answerValues.reduce((prev, curr) => {
      return Math.abs(curr - answer) < Math.abs(prev - answer) ? curr : prev;
    });
    return closest === playerAnswer;
  }

  /**
   * Determines which answer si closest to string similarity or contains the answer
   * @param playerAnswer
   * @param answers
   * @param answer
   * @returns {boolean}
   */
  isClosestString(playerAnswer, answers, answer) {
    const answerValues = Object.keys(answers).map((k) => answers[k]);
    const closest = answerValues.reduce((prev, curr) => {
      return stringSimilarity(prev.toUpperCase(), answer.toUpperCase()) < stringSimilarity(curr.toUpperCase(), answer.toUpperCase())
        ? curr
        : prev;
    });
    return (
      closest.toUpperCase() === playerAnswer.toUpperCase() ||
      answer.toUpperCase().contains(playerAnswer.toUpperCase())
    );
  }

  /**
   * Calculates and assigns the scores for the active question
   */
  calculateScoresForActiveQuestion() {
    const activeQuestion = this.getActiveQuestion();
    if (activeQuestion) {
      // for each score compared with the type and answer, set the players scores;
      const { id, answer, answerType } = activeQuestion;
      // get the answers
      const answers = this.answers[id];
      if (answers) {
        for (let [playerId, value] of Object.entries(answers)) {
          let scoreToAdd = 0;
          // find the player in the local player list
          const player = this.playerList.findPlayerById(playerId);
          if (player) {
            const playerAnswer = value;
            // Determine if score it to be awarded based on the answerType
            switch (answerType) {
              case 'MULTI':
                if (answer === playerAnswer) {
                  scoreToAdd++;
                }
                break;
              case 'BOOL':
                if (answer === playerAnswer) {
                  scoreToAdd++;
                }
                break;
              case 'NUMBER':
                if (this.isClosestNumber(playerAnswer, answers, answer)) {
                  scoreToAdd++;
                }
                break;
              case 'TEXT':
                if (this.isClosestString(playerAnswer, answers, answer)) {
                  scoreToAdd++;
                }
                break;
              default:
                break;
            }

            // Update the players score
            player.setScore(player.score + scoreToAdd);
          }
        }
      }
    }
  }

  /**
   * Set an answer for a given player for the active question
   * @param id
   * @param answer
   */
  setPlayerAnswerForActiveQuestion({ playerId, answer }) {
    const activeQuestion = this.getActiveQuestion();
    const player = this.playerList.findPlayerById(playerId);
    if (activeQuestion) {
      if (this.answers[activeQuestion.id]) {
        this.answers[activeQuestion.id][player.id] = answer;
      } else {
        this.answers[activeQuestion.id] = {
          [player.id]: answer
        };
      }
    }
  }
}

module.exports = Quiz;
