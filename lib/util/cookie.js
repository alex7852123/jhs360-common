'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.get = exports.set = exports.setOptions = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_COOKIE_OPTIONS = {
  expires: 30 * 24 * 60 * 60 * 1000, // 30天
  path: '/',
  domain: document.domain,
  prefix: 'hsbank',
  separation: '.'
};

function genKey(name) {
  return DEFAULT_COOKIE_OPTIONS.prefix + DEFAULT_COOKIE_OPTIONS.separation + name;
}

function setOptions(options) {
  (0, _assign2.default)(DEFAULT_COOKIE_OPTIONS, options);
}

function set(cname, cvalue, options) {
  var _options = (0, _assign2.default)({}, DEFAULT_COOKIE_OPTIONS, options);
  var expires = '; expires=' + new Date(new Date().getTime() + _options.expires)['toGMTString'](),
      path = '; path=' + _options.path,
      domain = '; domain=' + _options.domain;
  document.cookie = genKey(cname) + '=' + encodeURIComponent(cvalue) + expires + path + domain;
}

function get(cname) {
  var name = genKey(cname) + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) !== -1) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function remove(name) {
  set(name, '', {
    expires: -1 * 24 * 60 * 60 * 1000
  });
}

exports.setOptions = setOptions;
exports.set = set;
exports.get = get;
exports.remove = remove;