/**
 * Class to encapsulate question functionality
 */
class Question {
	constructor({id, type, content, answerType, answer}) {
		this.id = id;
		this.type = type;
		this.content = content;
		this.answerType = answerType;
		this.answer = answer;
		this.anwsers = [];
		this.answered = false;
	}

	addAnswer ({id, answer}) {
		this.anwsers.push({id, answer})
	}
}

module.exports = Question;
