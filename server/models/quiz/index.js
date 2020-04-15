const UUID = require('uuid').v4;
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

	getNextActiveQuestion () {
		return this.questionList.getNextActiveQuestion();
	}

	/**
	 * Set the active question to the next unanswered question
	 */
	setActiveQuestion() {
		this.questionList.getNextActiveQuestion();
	}

	calculateScoresForActiveQuestion () {
		const activeQuestion = this.getActiveQuestion();
		if (activeQuestion) {
			// for each score compared with the type and answer, set the players scores;
		}
	}

	/**
	 * Set an answer for a given player for the active question
	 * @param id
	 * @param answer
	 */
	setPlayerAnswerForActiveQuestion ({playerId, answer}) {
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
