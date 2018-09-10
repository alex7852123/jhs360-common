"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userAgent = window.navigator.userAgent.toLowerCase();

exports.default = {
  inWx: function inWx() {
    return (/micromessenger/.test(userAgent)
    );
  },
  inIOS: function inIOS() {
    return (/iphone|ipad|ipod/.test(userAgent)
    );
  },
  inAndroid: function inAndroid() {
    return (/android/.test(userAgent)
    );
  },
  inMobile: function inMobile() {
    return (/mobile/.test(userAgent)
    );
  }
};
module.exports = exports["default"];