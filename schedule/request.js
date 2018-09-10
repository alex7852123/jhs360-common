var request = require('request');


var CryptoJS = require('crypto-js')

var env2 = require('../lib/env');
env2.enabledModel('wrap', 'development')
var env = env2.default;

module.exports = {
  doPost
}

function doPost(url, data, type, apiKey = 'main', token, callback) {
  const api = env.apis[apiKey];
  if (type === 'old') {
    data.client = getClient({
      type: env.type,
      version: env.version
    })
    data.token = token;
  } else {
    data.common = getCommon({
      type: env.type,
      version: env.version,
      apiKey: api.apiKey,
      secretKey: api.secretKey,
      token: token
    })
  }
  post(api.url + url, data, callback)
}

function post(url, data, callback) {
  console.info(url)
  request({
    url: url,
    method: "POST",
    json: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formdata(data)
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if (callback && body.code == 0) {
        callback(body.data);
      } else {
        console.error(body)
      }
    }
  });
}

function formdata(data) {
  var key, result = [];
  if (typeof data === "string")
    return data;

  for (key in data) {
    if (data.hasOwnProperty(key) && data[key] !== undefined && data[key] != null)
      result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
  }
  return result.join("&");
}


function getCommon(params) {
  return hex(JSON.stringify({
    auth: new Auth(params.apiKey, params.secretKey, params.token),
    client: new Client(params.type, params.version, params.data)
  }));
}

function getClient(params) {
  return base64(JSON.stringify(Client(params.type, params.version, params.data)));
}

function Client(type, version, data) {
  if (!data) data = {
    ua: ''
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