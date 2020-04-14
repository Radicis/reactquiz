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
		this.anwsers = {}; // hash for ease of lookup and overwriting
		this.answered = false;
	}

	setAnswer ({id, answer}) {
		this.anwsers[id] = answer;
	}
}

module.exports = Question;
