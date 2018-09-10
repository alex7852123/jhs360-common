'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.enabledModel = enabledModel;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = {};
function enabledModel(type, env) {
  if (type === 'web' && env === 'development') {
    (0, _assign2.default)(environment, require('./web-dev'));
  } else if (type === 'web' && env === 'production') {
    (0, _assign2.default)(environment, require('./web-prod'));
  } else if (type === 'wrap' && env === 'development') {
    (0, _assign2.default)(environment, require('./wrap-dev'));
  } else if (type === 'wrap' && env === 'production') {
    (0, _assign2.default)(environment, require('./wrap-prod'));
  }
  return environment;
}

exports.default = environment;