import request from '../request'

/**
 * 账户设置-我的信息
 */
export function getMyInfo(){
   return request('/myAccount/myInfo', {},'old')
}

/**
 * 账户设置-银行卡信息
 */
export function getBankInfo(){
   return request('/accountManage/bankInfor', {},'old')
}
/**
 * 签到
 */
export function sign(){
   return request('/myAccount/sign', {},'old')
}
/**
 * 登录
 */
export function login(){
   return request('/index/login', {},'old')
}
/**
 * 银行信息列表
 * @param {*} type 业务类型(quick--快捷支付 B2C--个人网银 B2B--企业网银)
 */
export async function bankQuotaList(type){
   const data = await request('/accountManage/bankQuotaList', {},'old')
   if(type){
     return data[type]
   }
   return data
}
/**
 * 银行信息列表
 * @param {*} type 业务类型(quick--快捷支付 B2C--个人网银 B2B--企业网银)
 */
export function jsSignature(url){
    return request('/wechat/jsSignature', {url:encodeURIComponent(url)},'old')
}