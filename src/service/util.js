import env from '../env';

/**
 * 汇付平台 - 开户行区域
 */
export function qrCode(content, height, width,p=1) {
    var ps = ['p='+p],
        connect = content.lastIndexOf('?') == -1 ? '?' : '&';
    content += (connect + ps.join('&'));

    var params = [
        'content=' + encodeURIComponent(content),
        'height=' + (height || 120),
        'width=' + (width || 120)
    ];
    var generateQrCode = '/index/generateQrCode';
    return env.apis.main.url + generateQrCode + '?' + params.join('&');
}