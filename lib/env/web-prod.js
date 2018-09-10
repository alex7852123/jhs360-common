'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    type: 'web',
    env: 'production',
    version: '2.0.0.0',
    base_root_url: 'http://180.168.159.59:3000',
    baidu_id: 'b5786edb9ff2e6501690eb26f877eedb',
    domain: 'jhs360.com',
    apis: {
        main: {
            url: 'http://180.168.159.59:9101/f/api',
            apiKey: 'hsbankWebsite',
            secretKey: 'CE0E77B2104D7CA4886AB49BA9D00E6B'
        },
        anniversary: {
            url: 'http://120.76.240.226:7006/anniversary',
            apiKey: 'hsbankActivity',
            secretKey: '47B7E409A386F85E8559A27489F17349'
        }
    }
};
module.exports = exports['default'];