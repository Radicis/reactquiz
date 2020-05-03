class SocketError extends Error {
  constructor({ message, exit }) {
    super(message);
    this.exit = exit;
  }
}

module.exports = SocketError;
