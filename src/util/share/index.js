import WxShare from './wx.js'
import {
  SHARE_HEX_MOBILE
} from '../constant.js'

import * as account from '../../service/account'
import auth from '../auth'
import * as cookie from '../cookie'
import './local'

/**显示所有分享平台*/
export const SHARE_ALL = 0;
/**朋友*/
export const SHARE_APP_MESSAGE = 1 << 0; //朋友
/**朋友圈*/
export const SHARE_TIMELINE = 1 << 1; //朋友圈
/**QQ*/
export const SHARE_QQ = 1 << 2; //QQ
/**QQ空间*/
export const SHARE_QZONE = 1 << 3; //QQ空间
/**微博*/
export const SHARE_WEIBO = 1 << 4; //微博

/**
 * 分享工具
 */
class ShareUtil {

  wxShare = new WxShare();
  inviteSource = ['wechat', 'wechat', 'qq', 'weibo', 'qq'];
  channel = '4ecd69c4-de42-4aa3-b0e3-05708dc7a054';

  constructor() {
    this.wxConfig();
  }

  /**
   * 微信配置
   */
  async wxConfig() {
    const signature = await account.jsSignature(window.location.href.split('#')[0])
    this.wxShare.config(signature)
  }


  async setShareParams(params) {
    if (window.hsbank) {
      this.setAppShare(params);
    } else {
      const res = await this.getAbsShareParams(params);
      this.setWechatShare(params, res);
    }
  }

  //获取绝对分享的绝对地址，以及分享参数（不包含分享平台参数）
  async getAbsShareParams(params) {
    //添加邀请来源参数
    const data = {};
    data.channel = this.channel;
    if (auth.getToken()) { //已登录
      const res = await account.getMyInfo()
      data.hexMobile = auth.hex(res.mobile);
    } else {
      const hexMobile = cookie.get(SHARE_HEX_MOBILE).replace('string_', '');
      if (hexMobile) data.hexMobile = hexMobile;
    }
    return data
  }

  processUrl(url, data) {
    let params = [];
    //活动代码分享
    if (data) {
      if (data.activityCode) params.push('ac=' + data.activityCode);
      if (data.hexMobile) params.push('hm=' + data.hexMobile);
      if (data.inviteSource) params.push('inviteSource=' + data.inviteSource);
      if (data.channel) params.push('ad=' + data.channel);
    }
    let connect = url.lastIndexOf('?') == -1 ? '?' : '&';
    return url + connect + params.join('&');
  }

  setWechatShare(params, data) {
    //参数
    let menuItems = [];
    let shareType = params.shareType || SHARE_ALL;
    if (shareType != SHARE_ALL) {
      if (!(shareType & SHARE_APP_MESSAGE)) menuItems.push('menuItem:share:appMessage');
      if (!(shareType & SHARE_TIMELINE)) menuItems.push('menuItem:share:timeline');
      if (!(shareType & SHARE_QQ)) menuItems.push('menuItem:share:qq');
      if (!(shareType & SHARE_WEIBO)) menuItems.push('menuItem:share:weiboApp');
      if (!(shareType & SHARE_QZONE)) menuItems.push('menuItem:share:QZone');
    }
    this.wxShare.hideMenuItems(menuItems);

    this.wxShare.setShareParams({
      ...params,
      //添加邀请来源参数
      link: (link, i) => this.processUrl(params.link, {
        ...data,
        inviteSource: this.inviteSource[i]
      })
    });
  }


  setAppShare(params) {
    window.hsbank.setAppParams(JSON.stringify({
      code: params.activityCode,
      share: {
        title: params.title,
        desc: params.desc,
        imgUrl: params.imgUrl,
        link: params.link,
        shareType: params.shareType
      }
    }));
  }

  shareApp(params) {
    const data = {
      code: params.activityCode,
      share: {
        title: params.title,
        desc: params.desc,
        imgUrl: params.imgUrl,
        link: params.link || location.href,
        platformType: params.shareType
      }
    }
    window.hsbank.activityShare2(JSON.stringify(data));
  }

}

export default new ShareUtil();