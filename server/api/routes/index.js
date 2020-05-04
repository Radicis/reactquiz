const router = require('express').Router();

const QuizList = require('../../models/quizList');

router.post('/', (req, res) => {
  const { name } = req.body;
  // Create a new quiz
  const newQuiz = QuizList.addQuiz();
  const { id: quizId } = newQuiz;
  const { id: playerId } = newQuiz.addPlayer(name);
  return res.json({ playerId, quizId });
});

// Check if quiz is active
router.get('/:quizId', (req, res) => {
  const { quizId } = req.params;
  if (QuizList.getQuiz(quizId)) {
    return res.json('OK');
  }
  return res.status(404).send('Not active');
});

// Join quiz
router.post('/:quizId', (req, res) => {
  const { quizId } = req.params;
  const { name } = req.body;
  const quiz = QuizList.getQuiz(quizId);
  if (quiz) {
    const { id: quizId } = quiz;
    const { id: playerId } = quiz.addPlayer(name);
    return res.json({ quizId, playerId });
  }
  return res.status(404).send('Quiz Not Found');
});

module.exports = router;
