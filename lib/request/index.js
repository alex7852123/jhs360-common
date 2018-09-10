'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

var _auth = require('../util/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, data, type) {
    var apiKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'main';

    var api = _env2.default.apis[apiKey];
    var token = _env2.default.token || _auth2.default.getToken();
    if (type === 'old') {
        data.client = _auth2.default.getClient({
            type: _env2.default.type,
            version: _env2.default.version
        });
        data.token = token;
    } else {
        data.common = _auth2.default.getCommon({
            type: _env2.default.type,
            version: _env2.default.version,
            apiKey: api.apiKey,
            secretKey: api.secretKey,
            token: token
        });
    }

    return (0, _fetch2.default)(api.url + url, data);
}
module.exports = exports['default'];