'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _platform = require('../platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Share = function () {
  function Share() {
    (0, _classCallCheck3.default)(this, Share);
    this.isFinish = false;
    this.wxSdkUrl = "http://res.wx.qq.com/open/js/jweixin-1.0.0.js";
    this.shareApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'];
  } //js wx对象
  //是否有完成配置
  //微信注册分享API

  (0, _createClass3.default)(Share, [{
    key: 'writeScript',
    value: function writeScript() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = _this.wxSdkUrl;
        s.onload = function () {
          return resolve(window.wx);
        };
        document.body.appendChild(s);
      });
    }

    /**配置 */

  }, {
    key: 'config',
    value: function config(signature) {
      var _this2 = this;

      if (!_platform2.default.inWx()) return;

      if (!this.wx) {
        return this.writeScript().then(function (wx) {
          _this2.wx = wx;
          return _this2.config(signature);
        });
      }

      return new _promise2.default(function (resolve, reject) {
        _this2.wx.ready(function () {
          //第一次微信配置
          _this2.isFirst = false;
          if (!_this2.wxError) {
            //配置完成
            console.log('wx config success');
            _this2.isFinish = true;
            _this2.finishCallback && _this2.finishCallback();
            resolve("ok");
          } else {
            reject("wx config error:" + _this2.wxError);
          }
        });

        _this2.wx.error(function (res) {
          _this2.wxError = res;
          console.warn(_this2.wxError);
        });
        _this2.wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: signature.appId, // 必填，公众号的唯一标识
          timestamp: signature.timestamp, // 必填，生成签名的时间戳
          nonceStr: signature.nonceStr, // 必填，生成签名的随机串
          signature: signature.signature, // 必填，签名
          jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          'onMenuShareTimeline', //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
          'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
          'onMenuShareQQ', // 获取“分享到QQ”按钮点击状态及自定义分享内容接口
          'onMenuShareWeibo', // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
          'onMenuShareQZone', // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
          'hideMenuItems']
        });
      });
    }

    /**
     * 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @param {*} menuList 
     */

  }, {
    key: 'hideMenuItems',
    value: function hideMenuItems(menuList) {
      if (this.isFinish) {
        this.wx.hideMenuItems({
          menuList: menuList
        });
      }
    }

    /**
     * 分享参数，具体参数查看wechatApi
     * @param {*} params 
     */

  }, {
    key: 'setShareParams',
    value: function setShareParams(params) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        if (_this3.isFinish) {
          console.log('set share params');
          _this3.shareApiList.forEach(function (res, i) {
            _this3.wx[res]((0, _extends3.default)({}, params, {
              link: typeof params.link === 'function' ? params.link(res, i, _this3.shareApiList) : params.link || location.href
            }));
          });
        } else {
          _this3.finishCallback = function () {
            _this3.setShareParams(params);
          };
        }
      });
    }
  }]);
  return Share;
}();

exports.default = Share;
module.exports = exports['default'];