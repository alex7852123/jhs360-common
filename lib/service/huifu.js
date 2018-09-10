'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areaList = areaList;
exports.sendSmsCode = sendSmsCode;
exports.userRegister = userRegister;
exports.directRecharge = directRecharge;
exports.directRechargeByQp = directRechargeByQp;
exports.quickBinding = quickBinding;
exports.bosAcctActivate = bosAcctActivate;

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 汇付平台 - 开户行区域
 */
function areaList() {
  return (0, _request2.default)('/huifu/areaList', {});
}

/**
 * 汇付平台 - 发送短信验证码
 * @param {*} busiType 业务类型(user_register:开户，recharge:充值，bind:绑定卡或换卡)
 * @param {*} openAcctId  银行卡号(业务类型除 recharge 外其他必输)
 * @param {*} usrMp 银行预留手机号
 * @param {*} smsTempType  短信类型(O-原绑定卡预留手机号发送短信 N-新绑定卡预留手机号发送短信 业务类型为 rebind 时，必输)
 */
function sendSmsCode(_ref) {
  var busiType = _ref.busiType,
      openAcctId = _ref.openAcctId,
      usrMp = _ref.usrMp,
      smsTempType = _ref.smsTempType;

  return (0, _request2.default)('/huifu/sendSmsCode', { busiType: busiType, openAcctId: openAcctId, usrMp: usrMp, smsTempType: smsTempType });
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
function userRegister(usrName, cardId, bankId, provId, areaId,idNo, usrMp, callbackUrl) {
  return (0, _request2.default)('/huifu/userRegister', { usrName: usrName, cardId: cardId, bankId: bankId, provId: provId, areaId: areaId,idNo: idNo, usrMp: usrMp, callbackUrl: callbackUrl });
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
function directRecharge(_ref2) {
  var gateBusiId = _ref2.gateBusiId,
      bankId = _ref2.bankId,
      transAmt = _ref2.transAmt,
      callbackUrl = _ref2.callbackUrl;

  return (0, _request2.default)('/huifu/directRecharge', { gateBusiId: gateBusiId, bankId: bankId, transAmt: transAmt,callbackUrl: callbackUrl });
}
/**
 * 汇付平台 - 充值 QP--快捷支付
 * @param {*} transAmt  	充值金额
 * @param {*} smsCode  	短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} smsSeq 短信验证码(当 gateBusiId 为 QP 时，必输)
 * @param {*} callbackUrl 	回调url
 */
function directRechargeByQp(transAmt, callbackUrl) {
  var gateBusiId = 'QP';
  return (0, _request2.default)('/huifu/directRecharge', { gateBusiId: gateBusiId, transAmt: transAmt,callbackUrl: callbackUrl });
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
function quickBinding(openAcctId, bankId, usrMp, provId, areaId, smsCode, smsSeq, oldSmsCode, oldSmsSeq) {
  return (0, _request2.default)('/huifu/quickBinding', { openAcctId: openAcctId, bankId: bankId, usrMp: usrMp, provId: provId, areaId: areaId, smsCode: smsCode, smsSeq: smsSeq, oldSmsCode: oldSmsCode, oldSmsSeq: oldSmsSeq });
}
/**
 * 汇付平台 - 账户激活
 * @param {*} callbackUrl 	回调url
 */
function bosAcctActivate(callbackUrl) {
  return (0, _request2.default)('/huifu/bosAcctActivate', { callbackUrl: callbackUrl });
}