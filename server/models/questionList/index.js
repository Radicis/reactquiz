const questions = require('../../data/questions');

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

/**
 * Class to encapsulate question list functionality
 */
class QuestionList {
	constructor() {
		this.questions = [];
	}

	/**
	 * set the questions in a random order
	 */
	setQuestions() {
		// Get all questions from data and randomize order
		shuffleArray(questions.map(q => {
			delete q.answered; // remove any answered values
			return q;
		}));
		this.questions = questions;
	}

	/**
	 * Finds a question in the list by id
	 * @param id
	 * @returns {T}
	 */
	findQuestionById(id) {
		return this.questions.find(q => q.id === id);
	}

	getAnswer(id) {
		const question = this.findQuestionById(id);
		if (question && 'answer' in question) {
			return question.answer;
		}
	}

	/**
	 * Set the active question to the next unanswered question
	 */
	setActiveQuestion() {
		const nextActiveQuestion = this.questions.find(q => !q.answered);
		if (nextActiveQuestion) {
			this.activeQuestion = nextActiveQuestion;
		} else {
			this.activeQuestion = null;
		}
	}

	getActiveQuestion() {
		return this.activeQuestion;
	}
}

module.exports = new QuestionList(); // singleton
