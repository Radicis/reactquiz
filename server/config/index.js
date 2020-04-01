module.exports = {
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || '5000',
	playerTimeout: process.env.PLAYER_TIMEOUT || 1000 * 5
};
