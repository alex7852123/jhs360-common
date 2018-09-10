import CryptoJS from 'crypto-js/core';
import 'crypto-js/hmac-sha1';
import 'crypto-js/enc-base64';
import * as cookie from './cookie';
import {
    ACCOUNT_TOKEN
} from './constant';
import environment from '../env';

cookie.setOptions({
    domain: environment.domain
});

function Client(type, version, data) {
    if (!data) data = {
        ua: window.navigator.userAgent
    }
    return {
        language: 'zh-CN',
        type: type,
        version: version,
        data: data
    };
}

function Auth(apiKey, secretKey, token) {
    var timestamp = new Date().getTime();
    return {
        token: token,
        apiKey: apiKey,
        timestamp: timestamp,
        signature: CryptoJS.HmacSHA1(apiKey + timestamp, secretKey).toString(CryptoJS.enc.Hex)
    };
}

function hex(str) {
    return CryptoJS.enc.Utf8.parse(str).toString(CryptoJS.enc.Hex);
}

function base64(str) {
    return CryptoJS.enc.Utf8.parse(str).toString(CryptoJS.enc.Base64);
}

function getToken() {
    if (!!window.hsbank) {
        return window.hsbank.hasLogin();
    } else {
        return cookie.get(ACCOUNT_TOKEN)
    }
}

function setToken(token) {
    token ? cookie.set(ACCOUNT_TOKEN) : cookie.remove(ACCOUNT_TOKEN)
}

function getCommon(params) {
    return hex(JSON.stringify({
        auth: new Auth(params.apiKey, params.secretKey, params.token || getToken()),
        client: new Client(params.type, params.version, params.data)
    }));
}

function getClient(params) {
    return base64(JSON.stringify(Client(params.type, params.version, params.data)));
}
export default {
    hex,
    base64,
    getToken,
    setToken,
    getCommon,
    getClient
}