/**
 * Class to encapsulate question functionality
 */
class Question {
  constructor({
    type,
    content,
    answerType,
    answer,
    choices,
    path
  }) {
    this.type = type;
    this.path = path;
    this.content = content;
    this.answerType = answerType;
    this.choices = choices;
    this.answer = answer;
    this.answers = {}
  }
}

module.exports = Question;
