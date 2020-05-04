module.exports = {
  port: process.env.PORT || '5000',
  socketPort: process.env.PORT || '5001',
  playerTimeout: process.env.PLAYER_TIMEOUT || 1000 * 30
};
