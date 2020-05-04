const server = require('./server');

const { port } = require('./config');

server.listen(port, () => {
  console.info(`${new Date()}: Server started on port ${port}`);
})
