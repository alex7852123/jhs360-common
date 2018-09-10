'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.qrCode = qrCode;

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 汇付平台 - 开户行区域
 */
function qrCode(content, height, width) {
    var p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    var ps = ['p=' + p],
        connect = content.lastIndexOf('?') == -1 ? '?' : '&';
    content += connect + ps.join('&');

    var params = ['content=' + encodeURIComponent(content), 'height=' + (height || 120), 'width=' + (width || 120)];
    var generateQrCode = '/index/generateQrCode';
    return _env2.default.apis.main.url + generateQrCode + '?' + params.join('&');
}