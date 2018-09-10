'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _core = require('crypto-js/core');

var _core2 = _interopRequireDefault(_core);

require('crypto-js/hmac-sha1');

require('crypto-js/enc-base64');

var _cookie = require('./cookie');

var cookie = _interopRequireWildcard(_cookie);

var _constant = require('./constant');

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cookie.setOptions({
    domain: _env2.default.domain
});

function Client(type, version, data) {
    if (!data) data = {
        ua: window.navigator.userAgent
    };
    return {
        language: 'zh-CN',
        type: type,
        version: version,
        data: data
    };
}

function Auth(apiKey, secretKey, token) {
    var timestamp = new Date().getTime();
    return {
        token: token,
        apiKey: apiKey,
        timestamp: timestamp,
        signature: _core2.default.HmacSHA1(apiKey + timestamp, secretKey).toString(_core2.default.enc.Hex)
    };
}

function hex(str) {
    return _core2.default.enc.Utf8.parse(str).toString(_core2.default.enc.Hex);
}

function base64(str) {
    return _core2.default.enc.Utf8.parse(str).toString(_core2.default.enc.Base64);
}

function getToken() {
    if (!!window.hsbank) {
        return window.hsbank.hasLogin();
    } else {
        return cookie.get(_constant.ACCOUNT_TOKEN);
    }
}

function setToken(token) {
    token ? cookie.set(_constant.ACCOUNT_TOKEN) : cookie.remove(_constant.ACCOUNT_TOKEN);
}

function getCommon(params) {
    return hex((0, _stringify2.default)({
        auth: new Auth(params.apiKey, params.secretKey, params.token || getToken()),
        client: new Client(params.type, params.version, params.data)
    }));
}

function getClient(params) {
    return base64((0, _stringify2.default)(Client(params.type, params.version, params.data)));
}
exports.default = {
    hex: hex,
    base64: base64,
    getToken: getToken,
    setToken: setToken,
    getCommon: getCommon,
    getClient: getClient
};
module.exports = exports['default'];