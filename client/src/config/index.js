module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '5000',
  protocol: process.env.PROTOCOL || 'http',
  env: process.env.NODE_ENV || 'dev'
};
