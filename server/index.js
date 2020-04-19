const server = require('./websocket');

const { port, host } = require('./config');

server.listen(port, host, () => {
  console.info(`${new Date()}: Server started on port ${port}`);
});
