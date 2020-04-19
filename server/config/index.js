module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '5000',
  playerTimeout: process.env.PLAYER_TIMEOUT || 1000 * 60,
  defaultQuestionTime: process.env.QUESTION_TIME || 1000 * 30,
  nextQuestionTime: process.env.NEXT_QUESTION_TIME || 1000 * 30
};
