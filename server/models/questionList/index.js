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
			answer: q.answer,
			questionTime: q.questionTime || defaultQuestionTime
		})));
	}

	/**
	 * Finds a question in the list by id
	 * @param id
	 * @returns {T}
	 */
	findQuestionById(id) {
		return this.questions.find(q => q.id === id);
	}

	getAnswerForActiveQuestion() {
		if (this.activeQuestion && 'answer' in this.activeQuestion) {
			return this.activeQuestion.answer;
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

	setAnswerForActiveQuestion ({id, answer}) {
		if (this.activeQuestion) {
			this.activeQuestion.setAnswer({id, answer});
		}
	}
}

module.exports = new QuestionList(); // singleton
