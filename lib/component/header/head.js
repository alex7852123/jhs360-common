var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 3, stdin */\n.header-nav[_v-6d7f3d7c] {\n  padding: 20px 0; }\n  /* line 5, stdin */\n  .header-nav .gohome[_v-6d7f3d7c] {\n    font-size: 16px; }\n    /* line 7, stdin */\n    .header-nav .gohome .txt[_v-6d7f3d7c] {\n      line-height: 24px;\n      float: right; }\n    /* line 11, stdin */\n    .header-nav .gohome .fa[_v-6d7f3d7c] {\n      font-size: 22px;\n      margin-right: 5px;\n      float: right; }\n    /* line 16, stdin */\n    .header-nav .gohome a[_v-6d7f3d7c]:hover {\n      color: #e1b41b;\n      text-decoration: none; }\n  /* line 22, stdin */\n  .header-nav .header-nav-wrap[_v-6d7f3d7c] {\n    height: 53px;\n    background-color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'm-header',
    data: function data() {
        return {
            baseUrl: _env2.default.base_root_url
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<header class=\"header-nav header-login-nav \" _v-6d7f3d7c=\"\">\n    <div class=\"header-nav-wrap i-container\" _v-6d7f3d7c=\"\">\n        <!--<a :href=\"baseUrl\">\n            <img :src=\"baseUrl + '/images/logo.png'\" alt=\"\" />\n        </a>-->\n        <a :href=\"baseUrl\" _v-6d7f3d7c=\"\">\n            <img :src=\"baseUrl + '/images/logo-2.png'\" alt=\"\" _v-6d7f3d7c=\"\">\n            <img :src=\"baseUrl + '/images/logo-3.gif'\" alt=\"\" _v-6d7f3d7c=\"\">\n        </a>\n        <a :href=\"baseUrl\" class=\"gohome\" _v-6d7f3d7c=\"\">\n            <span class=\"txt\" _v-6d7f3d7c=\"\">进入首页</span>\n            <span class=\"fa fa-home\" _v-6d7f3d7c=\"\"></span>\n        </a>\n    </div>\n</header>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 3, stdin */\n.header-nav[_v-6d7f3d7c] {\n  padding: 20px 0; }\n  /* line 5, stdin */\n  .header-nav .gohome[_v-6d7f3d7c] {\n    font-size: 16px; }\n    /* line 7, stdin */\n    .header-nav .gohome .txt[_v-6d7f3d7c] {\n      line-height: 24px;\n      float: right; }\n    /* line 11, stdin */\n    .header-nav .gohome .fa[_v-6d7f3d7c] {\n      font-size: 22px;\n      margin-right: 5px;\n      float: right; }\n    /* line 16, stdin */\n    .header-nav .gohome a[_v-6d7f3d7c]:hover {\n      color: #e1b41b;\n      text-decoration: none; }\n  /* line 22, stdin */\n  .header-nav .header-nav-wrap[_v-6d7f3d7c] {\n    height: 53px;\n    background-color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6d7f3d7c", module.exports)
  } else {
    hotAPI.update("_v-6d7f3d7c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}