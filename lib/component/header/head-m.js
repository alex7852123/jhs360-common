var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 2, stdin */\n.header[_v-785974a2] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n  text-align: center;\n  background-color: #e0b41a;\n  color: #fff; }\n  /* line 9, stdin */\n  .header .back[_v-785974a2] {\n    color: #fff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    font-size: 30px; }\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'm-header',
    props: {
        title: String,
        isBack: {
            type: Boolean,
            default: true
        }
    },
    mounted: function mounted() {
        if (window.hsbank) {
            window.hsbank.setTitle(this.title);
        }
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<header class=\"header scrollable-header\" v-if=\"!inApp\" _v-785974a2=\"\">\n    <a @click=\"toView('home')\" _v-785974a2=\"\">\n        <i class=\"back fa fa-angle-left\" _v-785974a2=\"\"></i>\n    </a>\n    {{title}}\n</header>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 2, stdin */\n.header[_v-785974a2] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n  text-align: center;\n  background-color: #e0b41a;\n  color: #fff; }\n  /* line 9, stdin */\n  .header .back[_v-785974a2] {\n    color: #fff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    line-height: 50px;\n    padding: 0 15px;\n    font-size: 30px; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-785974a2", module.exports)
  } else {
    hotAPI.update("_v-785974a2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}