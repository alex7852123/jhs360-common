import auth from '../util/auth';
import 'whatwg-fetch';



export default function request(url, data) {
  return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        mode: "cors",
        // cache: "force-cache",
        body: formdata(data)
      })
      .then(parseJSON)
      .then(checkStatus)
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if(!response || typeof response.code === 'undefined') return response;
  if (response.code === 0) {
    return response.data
  } else if (response.code === 1) {
    response.text = '您的登录已失效，请重新登录！'
    auth.setToken(null);
  }
  var error = new Error(response.text);
  error.code = response.code;
  throw error;
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