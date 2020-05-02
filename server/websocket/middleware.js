const glob = require('glob');
const path = require('path');

let middleware = {};

glob.sync('./websocket/middleware/*.js').forEach(file => {
  const module = require(path.resolve(file));
  const { name, method } = module;
  middleware[name] = method;
});

const apply = (options, args) => {
  return args.reduce((previousResult, fn) => fn(previousResult), options);
};

module.exports = {
  middleware,
  apply
};
