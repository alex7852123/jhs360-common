import environment from '../env';

(function baidu(code) {
    var hm = document.createElement('script');
    hm.src = '//hm.baidu.com/hm.js?' + code;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
})(environment.baidu_id)
