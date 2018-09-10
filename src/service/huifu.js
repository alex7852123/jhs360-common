import request from '../request'

/**
 * 汇付平台 - 开户行区域
 */
export function areaList(){
   return request('/huifu/areaList', {})
}

/**
 * 汇付平台 - 发送短信验证码
 * @param {*} busiType 业务类型(user_register:开户，recharge:充值，bind:绑定卡或换卡)
 * @param {*} openAcctId  银行卡号(业务类型除 recharge 外其他必输)
 * @param {*} usrMp 银行预留手机号
 * @param {*} smsTempType  短信类型(O-原绑定卡预留手机号发送短信 N-新绑定卡预留手机号发送短信 业务类型为 rebind 时，必输)
 */
export function sendSmsCode({busiType,openAcctId,usrMp,smsTempType}) {
  return request('/huifu/sendSmsCode', {busiType,openAcctId,usrMp,smsTempType})
}

/**
 * 汇付平台 - 注册新用户(开通托管)
 * @param {*} usrName 真实姓名
 * @param {*} cardId  银行卡号
 * @param {*} bankId 	开户银行
 * @param {*} provId 开户省份
 * @param {*} areaId 开户城市
 * @param {*} smsCode 短信验证码
 * @param {*} smsSeq 	短信验证序列号
 * @param {*} idNo 证件号码
 * @param {*} usrMp 银行预留手机号
 * @param {*} callbackUrl 回调url
 */
export function userRegister(usrName,cardId,bankId,provId,areaId,idNo,usrMp,callbackUrl){
  return request('/huifu/userRegister', {usrName,cardId,bankId,provId,areaId,idNo,usrMp,callbackUrl})
}


/**
 * 汇付平台 - 充值 QP--快捷支付
 * @param {*} gateBusiId 支付网关业务代号(B2C--个人网银 B2B--企业网银 QP--快捷支付 AWS--代扣签约充值 默认快捷充值)
 * @param {*} bankId 银行简称(当 gateBusiId 为 B2B 或 B2C 时，必输)
 * @param {*} transAmt  	充值金额
 * @param {*} smsCode  	短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} smsSeq 短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} callbackUrl 	回调url
 */
export function directRecharge({gateBusiId,bankId,transAmt,callbackUrl}){
  return request('/huifu/directRecharge', {gateBusiId,bankId,transAmt,callbackUrl})
}
/**
 * 汇付平台 - 充值 QP--快捷支付
 * @param {*} transAmt  	充值金额
 * @param {*} smsCode  	短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} smsSeq 短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} callbackUrl 	回调url
 */
export function directRechargeByQp(transAmt,callbackUrl){
  const gateBusiId = 'QP';
  return request('/huifu/directRecharge', {gateBusiId,transAmt,callbackUrl})
}
/**
 * 汇付平台 - 用户换绑卡
 * @param {*} openAcctId 银行卡号
 * @param {*} bankId 银行简称
 * @param {*} usrMp  	银行预留手机号
 * @param {*} provId  开户省份
 * @param {*} areaId 开户城市
 * @param {*} smsCode 	短信验证码
 * @param {*} smsSeq 	短信序列号
 * @param {*} oldSmsCode 	原短信验证码
 * @param {*} oldSmsSeq 	原短信序列号
 */
export function quickBinding(openAcctId,bankId,usrMp,provId,areaId,smsCode,smsSeq,oldSmsCode,oldSmsSeq){
  return request('/huifu/quickBinding', {openAcctId,bankId,usrMp,provId,areaId,smsCode,smsSeq,oldSmsCode,oldSmsSeq})
}
/**
 * 汇付平台 - 账户激活
 * @param {*} callbackUrl 	回调url
 */
export function bosAcctActivate(callbackUrl){
  return request('/huifu/bosAcctActivate', {callbackUrl})
}

