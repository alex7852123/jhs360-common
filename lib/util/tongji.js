'use strict';

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function baidu(code) {
    var hm = document.createElement('script');
    hm.src = '//hm.baidu.com/hm.js?' + code;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
})(_env2.default.baidu_id);