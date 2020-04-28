const { app, server } = require('./websocket');

const { port } = require('./config');

server.listen(port, () => {
  console.info(`${new Date()}: Socket Server started on port ${port}`);
  app.listen(5001, () => {
    console.info(`${new Date()}: Express Server started on port ${5001}`);
  })
});
