'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _env2.default.type === 'web' ? require('./web-page') : require('./wrap-page');
module.exports = exports['default'];