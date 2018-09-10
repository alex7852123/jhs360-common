var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 3, stdin */\nfooter[_v-258f7da2] {\n  border-top: 1px solid #f0f0f0 !important;\n  width: 100%;\n  font-size: 14px; }\n  /* line 7, stdin */\n  footer .footer-top[_v-258f7da2] {\n    padding: 40px 0;\n    overflow: hidden; }\n    /* line 10, stdin */\n    footer .footer-top > div[_v-258f7da2] {\n      position: relative;\n      float: left; }\n    /* line 14, stdin */\n    footer .footer-top .footer-nav[_v-258f7da2] {\n      padding-right: 50px; }\n      /* line 16, stdin */\n      footer .footer-top .footer-nav dl[_v-258f7da2] {\n        margin-right: 20px;\n        float: left;\n        margin-bottom: 0; }\n        /* line 20, stdin */\n        footer .footer-top .footer-nav dl dt[_v-258f7da2],\n        footer .footer-top .footer-nav dl dd[_v-258f7da2] {\n          margin-bottom: .8rem; }\n        /* line 24, stdin */\n        footer .footer-top .footer-nav dl dt[_v-258f7da2] {\n          font-weight: 700; }\n          /* line 27, stdin */\n          footer .footer-top .footer-nav dl dt a[_v-258f7da2]:hover {\n            text-decoration: none; }\n          /* line 30, stdin */\n          footer .footer-top .footer-nav dl dt a .fa[_v-258f7da2] {\n            color: #ffc60a;\n            margin-right: .6rem; }\n        /* line 36, stdin */\n        footer .footer-top .footer-nav dl dd[_v-258f7da2] {\n          font-size: 14px;\n          text-align: right; }\n          /* line 39, stdin */\n          footer .footer-top .footer-nav dl dd a[_v-258f7da2] {\n            color: #636c72; }\n            /* line 41, stdin */\n            footer .footer-top .footer-nav dl dd a[_v-258f7da2]:hover {\n              color: #ffc60a; }\n    /* line 48, stdin */\n    footer .footer-top .footer-qrcode[_v-258f7da2] {\n      padding-right: 80px; }\n      /* line 50, stdin */\n      footer .footer-top .footer-qrcode .left[_v-258f7da2] {\n        margin-left: 80px;\n        margin-right: 35px;\n        width: 100px;\n        color: #636c72; }\n      /* line 56, stdin */\n      footer .footer-top .footer-qrcode .right[_v-258f7da2] {\n        width: 100px;\n        color: #636c72; }\n    /* line 61, stdin */\n    footer .footer-top .footer-contact[_v-258f7da2] {\n      width: 377px; }\n      /* line 63, stdin */\n      footer .footer-top .footer-contact .top[_v-258f7da2] {\n        position: relative;\n        padding: 10px 0;\n        width: 250px;\n        color: #999;\n        border: 1px solid #ddd;\n        text-align: center;\n        float: right; }\n        /* line 71, stdin */\n        footer .footer-top .footer-contact .top .fa[_v-258f7da2] {\n          position: absolute;\n          bottom: -10px;\n          width: 20px;\n          height: 20px;\n          line-height: 20px;\n          left: 0;\n          right: 0;\n          margin: 0 auto;\n          border: 1px solid #dedede;\n          border-radius: 100%;\n          background-color: #fff; }\n      /* line 85, stdin */\n      footer .footer-top .footer-contact .bottom[_v-258f7da2] {\n        color: #ffc60a;\n        width: 100%;\n        font-size: 34px;\n        text-align: right;\n        float: right;\n        padding-right: 1rem; }\n    /* line 94, stdin */\n    footer .footer-top .divider[_v-258f7da2] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto 0;\n      width: 1px;\n      height: 100px;\n      background-color: #f0f0f0; }\n  /* line 105, stdin */\n  footer .footer-copyright[_v-258f7da2] {\n    padding: 20px 0;\n    text-align: center;\n    border-top: 1px solid #f0f0f0; }\n    /* line 109, stdin */\n    footer .footer-copyright span[_v-258f7da2] {\n      margin-right: 1rem; }\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = require('../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'm-footer',
    data: function data() {
        return {
            baseUrl: _env2.default.base_root_url
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<footer _v-258f7da2=\"\">\n    <div class=\"footer-top i-container\" _v-258f7da2=\"\">\n        <div class=\"footer-nav\" _v-258f7da2=\"\">\n            <dl _v-258f7da2=\"\">\n                <dt class=\"m-b\" _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/account/'\" _v-258f7da2=\"\">\n                        <span class=\"fa fa-user\" _v-258f7da2=\"\"></span>\n                        <span _v-258f7da2=\"\">我的账户</span>\n                    </a>\n                </dt>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/account/cash/recharge/'\" _v-258f7da2=\"\">资金管理</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/account/invest/current/'\" _v-258f7da2=\"\">投资管理</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/account/message/'\" _v-258f7da2=\"\">我的消息</a>\n                </dd>\n            </dl>\n            <dl _v-258f7da2=\"\">\n                <dt class=\"m-b\" _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/about'\" _v-258f7da2=\"\">\n                        <span class=\"fa fa-users font-size-16\" _v-258f7da2=\"\"></span>\n                        <span _v-258f7da2=\"\">关于我们</span>\n                    </a>\n                </dt>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/about/company'\" _v-258f7da2=\"\">公司简介</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/about/team'\" _v-258f7da2=\"\">管理团队</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/about/contact'\" _v-258f7da2=\"\">联系我们</a>\n                </dd>\n            </dl>\n            <dl _v-258f7da2=\"\">\n                <dt class=\"m-b\" _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/help/question/'\" _v-258f7da2=\"\">\n                        <span class=\"fa fa-question-circle\" _v-258f7da2=\"\"></span>\n                        <span _v-258f7da2=\"\">帮助中心</span>\n                    </a>\n                </dt>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/help/question/'\" _v-258f7da2=\"\">常见问题</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/service/product'\" _v-258f7da2=\"\">产品介绍</a>\n                </dd>\n                <dd _v-258f7da2=\"\">\n                    <a target=\"_blank\" :href=\"baseUrl+'/more/help/guide/'\" _v-258f7da2=\"\">操作指南</a>\n                </dd>\n            </dl>\n            <div class=\"divider\" _v-258f7da2=\"\"></div>\n        </div>\n        <div class=\"footer-qrcode\" _v-258f7da2=\"\">\n            <div class=\"left pull-left text-center\" _v-258f7da2=\"\">\n                <img class=\"mb-2\" :src=\"baseUrl+'/images/app/qrcode/app-download-qrcode.png'\" alt=\"\" _v-258f7da2=\"\">\n                <span _v-258f7da2=\"\">手机客户端下载</span>\n            </div>\n            <div class=\"right pull-left text-center\" _v-258f7da2=\"\">\n                <img class=\"mb-2\" :src=\"baseUrl+'/images/app/qrcode/wechat-qrcode.png'\" alt=\"\" _v-258f7da2=\"\">\n                <span _v-258f7da2=\"\">关注微信服务号</span>\n            </div>\n            <div class=\"divider\" _v-258f7da2=\"\"></div>\n        </div>\n        <div class=\"footer-contact\" _v-258f7da2=\"\">\n            <p class=\"top\" _v-258f7da2=\"\">客服热线（工作日9:00-17:30）\n                <span class=\"fa fa-phone\" _v-258f7da2=\"\"></span>\n            </p>\n            <p class=\"bottom\" _v-258f7da2=\"\">400-969-6599</p>\n        </div>\n    </div>\n    <div class=\"footer-copyright i-container\" _v-258f7da2=\"\">\n        <span _v-258f7da2=\"\">\n            <img :src=\"baseUrl+'/images/app/trust-01.png'\" alt=\"\" _v-258f7da2=\"\">\n        </span>\n        <span _v-258f7da2=\"\">\n            <img :src=\"baseUrl+'/images/app/trust-02.png'\" alt=\"\" _v-258f7da2=\"\">\n        </span>\n        <span _v-258f7da2=\"\">\n            <img :src=\"baseUrl+'/images/app/trust-03.png'\" alt=\"\" _v-258f7da2=\"\">\n        </span>\n        <span _v-258f7da2=\"\">© 2015 上海蓄积金融信息服务有限公司 All right reserved. 沪ICP备16027229号-1</span>\n    </div>\n</footer>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 3, stdin */\nfooter[_v-258f7da2] {\n  border-top: 1px solid #f0f0f0 !important;\n  width: 100%;\n  font-size: 14px; }\n  /* line 7, stdin */\n  footer .footer-top[_v-258f7da2] {\n    padding: 40px 0;\n    overflow: hidden; }\n    /* line 10, stdin */\n    footer .footer-top > div[_v-258f7da2] {\n      position: relative;\n      float: left; }\n    /* line 14, stdin */\n    footer .footer-top .footer-nav[_v-258f7da2] {\n      padding-right: 50px; }\n      /* line 16, stdin */\n      footer .footer-top .footer-nav dl[_v-258f7da2] {\n        margin-right: 20px;\n        float: left;\n        margin-bottom: 0; }\n        /* line 20, stdin */\n        footer .footer-top .footer-nav dl dt[_v-258f7da2],\n        footer .footer-top .footer-nav dl dd[_v-258f7da2] {\n          margin-bottom: .8rem; }\n        /* line 24, stdin */\n        footer .footer-top .footer-nav dl dt[_v-258f7da2] {\n          font-weight: 700; }\n          /* line 27, stdin */\n          footer .footer-top .footer-nav dl dt a[_v-258f7da2]:hover {\n            text-decoration: none; }\n          /* line 30, stdin */\n          footer .footer-top .footer-nav dl dt a .fa[_v-258f7da2] {\n            color: #ffc60a;\n            margin-right: .6rem; }\n        /* line 36, stdin */\n        footer .footer-top .footer-nav dl dd[_v-258f7da2] {\n          font-size: 14px;\n          text-align: right; }\n          /* line 39, stdin */\n          footer .footer-top .footer-nav dl dd a[_v-258f7da2] {\n            color: #636c72; }\n            /* line 41, stdin */\n            footer .footer-top .footer-nav dl dd a[_v-258f7da2]:hover {\n              color: #ffc60a; }\n    /* line 48, stdin */\n    footer .footer-top .footer-qrcode[_v-258f7da2] {\n      padding-right: 80px; }\n      /* line 50, stdin */\n      footer .footer-top .footer-qrcode .left[_v-258f7da2] {\n        margin-left: 80px;\n        margin-right: 35px;\n        width: 100px;\n        color: #636c72; }\n      /* line 56, stdin */\n      footer .footer-top .footer-qrcode .right[_v-258f7da2] {\n        width: 100px;\n        color: #636c72; }\n    /* line 61, stdin */\n    footer .footer-top .footer-contact[_v-258f7da2] {\n      width: 377px; }\n      /* line 63, stdin */\n      footer .footer-top .footer-contact .top[_v-258f7da2] {\n        position: relative;\n        padding: 10px 0;\n        width: 250px;\n        color: #999;\n        border: 1px solid #ddd;\n        text-align: center;\n        float: right; }\n        /* line 71, stdin */\n        footer .footer-top .footer-contact .top .fa[_v-258f7da2] {\n          position: absolute;\n          bottom: -10px;\n          width: 20px;\n          height: 20px;\n          line-height: 20px;\n          left: 0;\n          right: 0;\n          margin: 0 auto;\n          border: 1px solid #dedede;\n          border-radius: 100%;\n          background-color: #fff; }\n      /* line 85, stdin */\n      footer .footer-top .footer-contact .bottom[_v-258f7da2] {\n        color: #ffc60a;\n        width: 100%;\n        font-size: 34px;\n        text-align: right;\n        float: right;\n        padding-right: 1rem; }\n    /* line 94, stdin */\n    footer .footer-top .divider[_v-258f7da2] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto 0;\n      width: 1px;\n      height: 100px;\n      background-color: #f0f0f0; }\n  /* line 105, stdin */\n  footer .footer-copyright[_v-258f7da2] {\n    padding: 20px 0;\n    text-align: center;\n    border-top: 1px solid #f0f0f0; }\n    /* line 109, stdin */\n    footer .footer-copyright span[_v-258f7da2] {\n      margin-right: 1rem; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-258f7da2", module.exports)
  } else {
    hotAPI.update("_v-258f7da2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}