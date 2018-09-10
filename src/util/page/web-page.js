import env from '../../env';

const views = {
    invest: { url: '/dq/' }, //投资
    home: { url: '' }, //首页
    login: { url:'/login', backPage: true }, //登录
    register: { url: '/register' }, //注册
    help: { url: '/more/help' }, //帮助中心
    my: {  url: '/account/', needAuth: true }, //我的
    tickets: { url: '/account/ticket/', needAuth: true }, //卡券
    peanut: {  url: '/peanut/record/', needAuth: true }, //我的花生豆
    myInvest: { url: '/account/invest/dq/',  needAuth: true }, //我的投资
    myLog: { url: '/account/cash/log',  needAuth: true }, //交易记录
    peanutPark: { url: '/peanut/',  needAuth: false }  //花生乐园
};


export default function toView(viewName) {
    const view = views[viewName];
    if(!view) throw Error('viewName not found')
    location.href = env.base_root_url + view.url + (view.backPage ? '?redirectUrl=' + encodeURIComponent(location.href) : '');
}