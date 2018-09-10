import env from '../../env';
import auth from '../auth';


const views = {
    invest: { version: '1.2.0', appViewName: 'invest', url: '/invest/list/project' }, //投资
    home: { version: '1.0.0', appViewName: 'home', url: '/' }, //首页
    login: { version: '1.0.0', appViewName: 'login', url: '/sign/', backPage: true }, //登录
    register: { version: '1.0.0', appViewName: 'register', url: '/sign/register' }, //注册
    help: { version: '1.0.0', appViewName: 'help', url: '/more/help/' }, //帮助中心
    my: { version: '1.4.2', appViewName: 'my', url: '/account/', needAuth: true }, //我的
    tickets: { version: '1.4.2', appViewName: 'tickets', url: '/account/ticket/', needAuth: true }, //卡券
    peanut: { version: '1.4.3', appViewName: 'peanut', url: '/account/peanut/', defaultAppViewName: 'my', needAuth: true }, //我的花生豆
    yeepayRegister: { version: '1.4.3', appViewName: 'yeepayRegister', url: '/yeepay/register/', defaultAppViewName: 'my', needAuth: true }, //开通易宝账户
    myInvest: { version: '1.4.3', appViewName: 'myInvest', url: '/account/invest/2', defaultAppViewName: 'my', needAuth: true }, //我的投资
    myLog: { version: '1.4.3', appViewName: 'myLog', url: '/account/log', defaultAppViewName: 'my', needAuth: true }, //交易记录
    peanutPark: { version: '1.4.3', appViewName: 'peanutPark', url: '/account/peanut/', defaultAppViewName: 'my', needAuth: false }  //花生乐园
};


/**
 *  app和微信交互跳转帮助
 */
export default function toView(viewName, params) {
    let view = views[viewName];
    if (!view) throw Error("'Could not find the supplied viewName: '" + viewName + "'");
    if (inApp()) {
        gotoAppView(viewName, params || {});
    } else {
        toWechat(view.url, view.backPage ? window.location.href : '');
    }
}



function inApp(){
    return !!window.hsbank;
}
function hasLogin(){
    return !!auth.getToken();
}

/**
 *  版本比较
 */
function versionCompare(version1, version2, operator) {
    let res = compare(version1, version2);
    switch (operator) {
        case 'gt':
        case '>':
            return res === 1;
        case '>=':
            return res >= 0;
        case 'lt':
        case '<':
            return res === -1;
        case '<=':
            return res <= 0;
        case 'eq':
        case '=':
            return res === 0;
    }
    return false;
}

function compare(v1, v2) {
    if (v1 == v2) return 0;
    let arr1 = v1.split('.'),
        arr2 = v2.split('.'),
        max = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < max; i++) {
        let v1 = parseInt(arr1[i] || '0'),
            v2 = parseInt(arr2[i] || '0');

        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }
    return 0;
}


function toWechat(url, callbackUrl) {
    url = env.base_root_url + url +
        (callbackUrl ? '?redirectUrl=' + encodeURIComponent(callbackUrl) : '');
    if (window == window.parent) {
        window.location.href = url;
    } else {
        top.location.href = url;
    }
}

function gotoAppView(viewName, params) {
    let view = views[viewName];
    if (!hasLogin() && view.needAuth) {
        return gotoAppView('login');
    }
    if (!view) throw Error("'Could not find the supplied viewName: '" + viewName + "'");

    let hsbank = window.hsbank,
        sinceVersion = view.version,  //页面版本支持
        appVersion = window.hsbank.getAppVersion(); //app版本

    if (versionCompare(appVersion, sinceVersion, '>=')) {  //版本是否支持
        switch (viewName) {
            case 'invest':
                hsbank.invest(params.projectId || '');
                break;
            case 'peanutPark':
                hsbank.peanutPark(params.productId || '');
                break;
            default:
                hsbank.gotoView(view.appViewName);
        }
    } else {  //旧版本处理
        switch (viewName) {
            case 'invest':
                hsbank.investProject();
                break;
            default:
                view.defaultAppViewName ? hsbank.gotoView(view.defaultAppViewName) : hsbank.gotoView('home');
        }
    }
}

