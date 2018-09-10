'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHARE_WEIBO = exports.SHARE_QZONE = exports.SHARE_QQ = exports.SHARE_TIMELINE = exports.SHARE_APP_MESSAGE = exports.SHARE_ALL = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _wx = require('./wx.js');

var _wx2 = _interopRequireDefault(_wx);

var _constant = require('../constant.js');

var _account = require('../../service/account');

var account = _interopRequireWildcard(_account);

var _auth = require('../auth');

var _auth2 = _interopRequireDefault(_auth);

var _cookie = require('../cookie');

var cookie = _interopRequireWildcard(_cookie);

require('./local');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**显示所有分享平台*/
var SHARE_ALL = exports.SHARE_ALL = 0;
/**朋友*/
var SHARE_APP_MESSAGE = exports.SHARE_APP_MESSAGE = 1 << 0; //朋友
/**朋友圈*/
var SHARE_TIMELINE = exports.SHARE_TIMELINE = 1 << 1; //朋友圈
/**QQ*/
var SHARE_QQ = exports.SHARE_QQ = 1 << 2; //QQ
/**QQ空间*/
var SHARE_QZONE = exports.SHARE_QZONE = 1 << 3; //QQ空间
/**微博*/
var SHARE_WEIBO = exports.SHARE_WEIBO = 1 << 4; //微博

/**
 * 分享工具
 */

var ShareUtil = function () {
  function ShareUtil() {
    (0, _classCallCheck3.default)(this, ShareUtil);
    this.wxShare = new _wx2.default();
    this.inviteSource = ['wechat', 'wechat', 'qq', 'weibo', 'qq'];
    this.channel = '4ecd69c4-de42-4aa3-b0e3-05708dc7a054';

    this.wxConfig();
  }

  /**
   * 微信配置
   */


  (0, _createClass3.default)(ShareUtil, [{
    key: 'wxConfig',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var signature;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return account.jsSignature(window.location.href.split('#')[0]);

              case 2:
                signature = _context.sent;

                this.wxShare.config(signature);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function wxConfig() {
        return _ref.apply(this, arguments);
      }

      return wxConfig;
    }()
  }, {
    key: 'setShareParams',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(params) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!window.hsbank) {
                  _context2.next = 4;
                  break;
                }

                this.setAppShare(params);
                _context2.next = 8;
                break;

              case 4:
                _context2.next = 6;
                return this.getAbsShareParams(params);

              case 6:
                res = _context2.sent;

                this.setWechatShare(params, res);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setShareParams(_x) {
        return _ref2.apply(this, arguments);
      }

      return setShareParams;
    }()

    //获取绝对分享的绝对地址，以及分享参数（不包含分享平台参数）

  }, {
    key: 'getAbsShareParams',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(params) {
        var data, res, hexMobile;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                //添加邀请来源参数
                data = {};

                data.channel = this.channel;

                if (!_auth2.default.getToken()) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 5;
                return account.getMyInfo();

              case 5:
                res = _context3.sent;

                data.hexMobile = _auth2.default.hex(res.mobile);
                _context3.next = 11;
                break;

              case 9:
                hexMobile = cookie.get(_constant.SHARE_HEX_MOBILE).replace('string_', '');

                if (hexMobile) data.hexMobile = hexMobile;

              case 11:
                return _context3.abrupt('return', data);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAbsShareParams(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getAbsShareParams;
    }()
  }, {
    key: 'processUrl',
    value: function processUrl(url, data) {
      var params = [];
      //活动代码分享
      if (data) {
        if (data.activityCode) params.push('ac=' + data.activityCode);
        if (data.hexMobile) params.push('hm=' + data.hexMobile);
        if (data.inviteSource) params.push('inviteSource=' + data.inviteSource);
        if (data.channel) params.push('ad=' + data.channel);
      }
      var connect = url.lastIndexOf('?') == -1 ? '?' : '&';
      return url + connect + params.join('&');
    }
  }, {
    key: 'setWechatShare',
    value: function setWechatShare(params, data) {
      var _this = this;

      //参数
      var menuItems = [];
      var shareType = params.shareType || SHARE_ALL;
      if (shareType != SHARE_ALL) {
        if (!(shareType & SHARE_APP_MESSAGE)) menuItems.push('menuItem:share:appMessage');
        if (!(shareType & SHARE_TIMELINE)) menuItems.push('menuItem:share:timeline');
        if (!(shareType & SHARE_QQ)) menuItems.push('menuItem:share:qq');
        if (!(shareType & SHARE_WEIBO)) menuItems.push('menuItem:share:weiboApp');
        if (!(shareType & SHARE_QZONE)) menuItems.push('menuItem:share:QZone');
      }
      this.wxShare.hideMenuItems(menuItems);

      this.wxShare.setShareParams((0, _extends3.default)({}, params, {
        //添加邀请来源参数
        link: function link(_link, i) {
          return _this.processUrl(params.link, (0, _extends3.default)({}, data, {
            inviteSource: _this.inviteSource[i]
          }));
        }
      }));
    }
  }, {
    key: 'setAppShare',
    value: function setAppShare(params) {
      window.hsbank.setAppParams((0, _stringify2.default)({
        code: params.activityCode,
        share: {
          title: params.title,
          desc: params.desc,
          imgUrl: params.imgUrl,
          link: params.link,
          shareType: params.shareType
        }
      }));
    }
  }, {
    key: 'shareApp',
    value: function shareApp(params) {
      var data = {
        code: params.activityCode,
        share: {
          title: params.title,
          desc: params.desc,
          imgUrl: params.imgUrl,
          link: params.link || location.href,
          platformType: params.shareType
        }
      };
      window.hsbank.activityShare2((0, _stringify2.default)(data));
    }
  }]);
  return ShareUtil;
}();

exports.default = new ShareUtil();