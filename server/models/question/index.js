/**
 * Class to encapsulate question functionality
 */
class Question {
  constructor({
    id,
    type,
    content,
    answerType,
    answer,
    choices,
    path,
    questionTime
  }) {
    this.id = id;
    this.type = type;
    this.path = path;
    this.content = content;
    this.answerType = answerType;
    this.choices = choices;
    this.answer = answer;
    this.questionTime = questionTime;
  }
}

module.exports = Question;
