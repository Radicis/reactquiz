module.exports = {
  name: 'checkIsOwner',
  method: options => {
    const { player, quiz } = options;
    if (!quiz) {
      throw new Error('No quiz found');
    }
    if (!player) {
      throw new Error('No player found');
    }
    const { id: playerId } = player;
    // if owner or the only one there
    if (quiz.checkIsOwner(playerId) || quiz.getPlayers().length === 1) {
      return options;
    }
    throw new Error('Player is not owner');
  }
};
