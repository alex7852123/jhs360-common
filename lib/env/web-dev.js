'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    type: 'web',
    env: 'development',
    version: '2.0.0.0',
    base_root_url: 'http://test.jhs360.com/web',
    baidu_id: '88d4472bf609ccdddd797477a036ee3a',
    domain: '',
    apis: {
        main: {
              url:'http://test.jhs360.com/wapi/f/api',
            //url: 'http://120.76.241.15:9101/f/api',
            // url: 'http://120.76.241.15:9802/f/api',
            apiKey: 'hsbankWebsite',
            secretKey: 'CE0E77B2104D7CA4886AB49BA9D00E6B'
        },
        anniversary: {
            url: 'http://120.25.122.251:7001/anniversary',
            apiKey: 'hsbankWeb',
            secretKey: '870BD3D20AE6B2510A87A47FDB624754'
        },
        report: {
            url: 'http://localhost:3000',
            apiKey: 'hsbankWeb',
            secretKey: '870BD3D20AE6B2510A87A47FDB624754'
        }
    }
};
module.exports = exports['default'];