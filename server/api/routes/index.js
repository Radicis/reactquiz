const router = require('express').Router();

const QuizList = require('../../models/quizList');
const GlobalPlayerList = require('../../models/playerList/global');

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
  const { name, playerId = null } = req.body;
  const quiz = QuizList.getQuiz(quizId);
  if (quiz) {
    const { id: quizId } = quiz;
    // Check if the player ID is already in the system
    if (playerId) {
      const existingPlayer = GlobalPlayerList.findPlayerById(playerId);
      if (existingPlayer) {
        const { id: existingPlayerId } = existingPlayer;
        // Check if they had joined this quiz
        const quizPlayer = quiz.findPlayerById(existingPlayerId);
        if (quizPlayer) {
          return res.json({ quizId, playerId: existingPlayerId });
        }
        const { id: playerId } = quiz.addPlayer(name, true);
        return res.json({ quizId, playerId });
      }
      const { id: playerId } = quiz.addPlayer(name);
      return res.json({ quizId, playerId });
    }
    const { id: newPlayerId } = quiz.addPlayer(name);
    return res.json({ quizId, playerId: newPlayerId });
  }
  return res.status(404).send('Quiz Not Found');
});

module.exports = router;
