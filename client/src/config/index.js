module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '5000',
  clientPort: process.env.CLIENT_PORT || '3000',
  protocol: process.env.PROTOCOL || 'http',
  socketPort: process.env.SOCKET_PORT || '5001',
  env: process.env.NODE_ENV || 'dev',
  baseUrl: process.env.BASE_URL || 'http://localhost'
};
