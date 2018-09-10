'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bankQuotaList = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 银行信息列表
 * @param {*} type 业务类型(quick--快捷支付 B2C--个人网银 B2B--企业网银)
 */
var bankQuotaList = exports.bankQuotaList = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(type) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _request2.default)('/accountManage/bankQuotaList', {}, 'old');

          case 2:
            data = _context.sent;

            if (!type) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', data[type]);

          case 5:
            return _context.abrupt('return', data);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function bankQuotaList(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 银行信息列表
 * @param {*} type 业务类型(quick--快捷支付 B2C--个人网银 B2B--企业网银)
 */


exports.getMyInfo = getMyInfo;
exports.getBankInfo = getBankInfo;
exports.sign = sign;
exports.login = login;
exports.jsSignature = jsSignature;

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 账户设置-我的信息
 */
function getMyInfo() {
  return (0, _request2.default)('/myAccount/myInfo', {}, 'old');
}

/**
 * 账户设置-银行卡信息
 */
function getBankInfo() {
  return (0, _request2.default)('/accountManage/bankInfor', {}, 'old');
}
/**
 * 签到
 */
function sign() {
  return (0, _request2.default)('/myAccount/sign', {}, 'old');
}
/**
 * 登录
 */
function login() {
  return (0, _request2.default)('/index/login', {}, 'old');
}function jsSignature(url) {
  return (0, _request2.default)('/wechat/jsSignature', { url: encodeURIComponent(url) }, 'old');
}