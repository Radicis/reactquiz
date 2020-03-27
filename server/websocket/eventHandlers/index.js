// Require all of the event handler files
const glob = require('glob');
const path = require('path');

let eventHandlers = {};

glob.sync('./websocket/eventHandlers/events/*.js').forEach(file => {
	const module = require(path.resolve(file));
	const { name, method } = module;
	eventHandlers[name] = method;
});

module.exports = eventHandlers;
