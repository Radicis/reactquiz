module.exports = {
  name: 'checkIsOwner',
  method: options => {
    const { player, quiz } = options;
    const { id: playerId } = player;
    // if owner or the only one there
    if (quiz.checkIsOwner(playerId) || quiz.getPlayers().length === 1) {
      return options;
    }
    throw new SocketError({
      message: 'You are not the owner of this quiz',
      exit: false
    });
  }
};
