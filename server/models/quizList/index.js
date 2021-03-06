const Quiz = require('../quiz');

/**
 * Class to encapsulate quiz list functionality
 */
class QuizList {
  constructor() {
    this.quizzes = {};
  }

  addQuiz() {
    const newQuiz = new Quiz();
    this.quizzes[newQuiz.id] = newQuiz;
    return newQuiz;
  }

  removeQuiz (quizId) {
    delete this.quizzes[quizId];
  }

  /**
   * Getter for the active question
   * @returns {T | null}
   */
  getQuiz(quizId) {
    return this.quizzes[quizId];
  }
}

module.exports = new QuizList();
