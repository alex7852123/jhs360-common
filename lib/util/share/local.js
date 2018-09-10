'use strict';

var _cookie = require('../cookie');

var _constant = require('../constant.js');

var constant = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//location.
(function setQueryParamsCookie() {
    var index = location.href.lastIndexOf('?');
    var params = location.href.substring(index + 1).split("&");
    params.map(function (v) {
        var arr = v.split('=');
        var key = arr[0],
            val = arr[1];
        switch (key) {
            case 'ad':
                {
                    (0, _cookie.set)(constant.SHARE_CHANNEL, val);
                    break;
                }
            case 'inviteSource':
                {
                    (0, _cookie.set)(constant.SHARE_INVITE_SOURCE, val);
                    break;
                }
            case 'hm':
                {
                    (0, _cookie.set)(constant.SHARE_HEX_MOBILE, val);
                    break;
                }
            case 'subid':
                {
                    (0, _cookie.set)(constant.SHARE_CHANNEL_USER_ID, val);
                    break;
                }
            case 'regm':
                {
                    (0, _cookie.set)(constant.SHARE_REGISTER_MOBILE, val);
                    break;
                }
            case 'ac':
                {
                    (0, _cookie.set)(constant.ACTIVITY_CODE, val);
                    break;
                }
        }
    });
})();