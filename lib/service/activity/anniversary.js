'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activityData = activityData;
exports.lottery = lottery;
exports.bless = bless;
exports.share = share;
exports.myBlessPrizes = myBlessPrizes;
exports.myLotteryPrizes = myLotteryPrizes;
exports.lotteryPrizes = lotteryPrizes;

var _request = require('../../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apikey = 'anniversary';

/**
 * 活动前置接口-活动数据
 */
function activityData() {
  return (0, _request2.default)('/front/activityData', {}, '', apikey);
}

/**
 * 抽奖
 */
function lottery() {
  return (0, _request2.default)('/front/lottery', {}, '', apikey);
}
/**
 * 送祝福
 */
function bless() {
  return (0, _request2.default)('/front/bless', {}, '', apikey);
}
/**
 * 分享
 */
function share() {
  return (0, _request2.default)('/front/share', {}, '', apikey);
}
/**
 * 我的好礼
 */
function myBlessPrizes(pageSize, pageNumber) {
  return (0, _request2.default)('/front/myBlessPrizes', { pageSize: pageSize, pageNumber: pageNumber }, '', apikey);
}
/**
 * 中奖记录
 */
function myLotteryPrizes(pageSize, pageNumber) {
  return (0, _request2.default)('/front/myLotteryPrizes', { pageSize: pageSize, pageNumber: pageNumber }, '', apikey);
}
/**
 * 幸运播报
 */
function lotteryPrizes() {
  return (0, _request2.default)('/front/lotteryPrizes', {}, '', apikey);
}