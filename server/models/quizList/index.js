const Quiz = require('../quiz');

/**
 * Class to encapsulate quiz list functionality
 */
class QuizList {
  constructor() {
    this.quizzes = {
      test: new Quiz('Test Quiz', 'test')
    };
  }

  addQuiz(name) {
    const newQuiz = new Quiz(name);
    this.quizzes[newQuiz.id] = newQuiz;
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
