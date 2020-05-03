const glob = require('glob');
const path = require('path');

let helpers = {};

glob.sync('./websocket/helpers/*.js').forEach(file => {
  const module = require(path.resolve(file));
  const { name, method } = module;
  helpers[name] = method;
});

module.exports = helpers;
