import fetch from './fetch';
import env from '../env';
import auth from '../util/auth';

export default function request(url, data, type, apiKey = 'main') {
    const api = env.apis[apiKey];
    const token = env.token || auth.getToken();
    if (type === 'old') {
        data.client = auth.getClient({
            type: env.type,
            version: env.version
        })
        data.token = token;
    } else {
        data.common = auth.getCommon({
            type: env.type,
            version: env.version,
            apiKey: api.apiKey,
            secretKey: api.secretKey,
            token: token
        })
    }

    return fetch(api.url + url, data)
}