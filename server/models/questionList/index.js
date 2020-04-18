const questions = require('../../data/questions');
const Question = require('../question');

const { defaultQuestionTime } = require('../../config');

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

/**
 * Class to encapsulate question list functionality
 */
class QuestionList {
	constructor() {
		this.questions = [];
		this.setQuestions(); // init questions
	}

	/**
	 * set the questions in a random order
	 */
	setQuestions() {
		this.questions = shuffleArray(questions.map(q => new Question({
			id: q.id,
			type: q.type,
			content: q.content,
			answerType: q.answerType,
			...(q.answerType === 'MULTI' && { choices: q.choices || []}),
			answer: q.answer,
			questionTime: q.questionTime || defaultQuestionTime
		})));
	}

	/**
	 * Set the active question to the next unanswered question
	 */
	getNextActiveQuestion() {
		if (!this.activeQuestion) {
			this.activeQuestion = this.questions[0]; // Get the first one
			return this.activeQuestion || false;
		}

		const activeQuestionIndex = this.questions.findIndex(q => q.id === this.activeQuestion.id);
		if (activeQuestionIndex !== -1 && activeQuestionIndex + 1 < this.questions.length) {
			this.activeQuestion = this.questions[activeQuestionIndex + 1];
			return this.activeQuestion;
		}

		return false; // quiz is done
	}

	/**
	 * Getter for the active question
	 * @returns {T | null}
	 */
	getActiveQuestion() {
		return this.activeQuestion;
	}
}

module.exports = QuestionList;
