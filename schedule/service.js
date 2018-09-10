var doPost = require('./request').doPost;

var CryptoJS = require('crypto-js')

module.exports = {
    login(mobile, password, callback) {
        doPost('/index/login', {
            mobile,
            password: hex(password),
            type: 1
        }, 'old', 'main', '', callback)
    },
    sign(token, callback) {
        doPost('/myAccount/sign', {}, 'old', 'main', token, callback)
    },
    share(token, callback) {
        doPost('/front/share', {}, '', 'anniversary', token, callback)
    },
    bless(token, callback) {
        doPost('/front/bless', {}, '', 'anniversary', token, callback)
    }
}


function hex(str) {
    return CryptoJS.enc.Utf8.parse(str).toString(CryptoJS.enc.Hex);
}