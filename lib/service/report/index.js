'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activity = exports.userTimeByApp = exports.userChannel = exports.userArea = exports.userAgeGroupByAmount = exports.userAgeGroupByCount = exports.subjectType = exports.loanNumberByProjectType = exports.loanNumber = exports.investNumberRank = exports.investAmountRank = exports.investByUsersAndNumber = exports.investAmount = exports.overview = undefined;

var _request = require('../../request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apikey = 'report';

/** 业绩数据·总览*/
var overview = exports.overview = function overview() {
  return (0, _request2.default)('/overview', {}, '', apikey);
};

/** 1.1 业绩数据—投资总额度*/
var investAmount = exports.investAmount = function investAmount() {
  return (0, _request2.default)('/investAmount', {}, '', apikey);
};

/** 1.2 投资用户数/投资次数*/
var investByUsersAndNumber = exports.investByUsersAndNumber = function investByUsersAndNumber() {
  return (0, _request2.default)('/investByUsersAndNumber', {}, '', apikey);
};

/** 1.3 业绩数据—投资用户排行榜*/
var investAmountRank = exports.investAmountRank = function investAmountRank() {
  return (0, _request2.default)('/investAmountRank', {}, '', apikey);
};
var investNumberRank = exports.investNumberRank = function investNumberRank() {
  return (0, _request2.default)('/investNumberRank', {}, '', apikey);
};

/** 1.4 业绩数据—借款笔数*/
var loanNumber = exports.loanNumber = function loanNumber() {
  return (0, _request2.default)('/loanNumber', {}, '', apikey);
};
var loanNumberByProjectType = exports.loanNumberByProjectType = function loanNumberByProjectType() {
  return (0, _request2.default)('/loanNumberByProjectType', {}, '', apikey);
};

/** 1.5 业绩数据—标的类型*/
var subjectType = exports.subjectType = function subjectType() {
  return (0, _request2.default)('/subjectType', {}, '', apikey);
};

/** 2.1 用户画像—花生用户年龄分布*/
var userAgeGroupByCount = exports.userAgeGroupByCount = function userAgeGroupByCount() {
  return (0, _request2.default)('/userAgeGroupByCount', {}, '', apikey);
};
var userAgeGroupByAmount = exports.userAgeGroupByAmount = function userAgeGroupByAmount() {
  return (0, _request2.default)('/userAgeGroupByAmount', {}, '', apikey);
};

/** 2.2 用户画像—花生用户地域分布*/
var userArea = exports.userArea = function userArea() {
  return (0, _request2.default)('/userArea', {}, '', apikey);
};

/** 2.3 用户画像——投资途径分布 */
var userChannel = exports.userChannel = function userChannel() {
  return (0, _request2.default)('/userChannel', {}, '', apikey);
};

/** 2.4 用户画像—花生用户活跃时间分布*/
var userTimeByApp = exports.userTimeByApp = function userTimeByApp() {
  return (0, _request2.default)('/userTimeByApp', {}, '', apikey);
};

/** 精彩活动，乐享投资 */
var activity = exports.activity = function activity() {
  return (0, _request2.default)('/activity', {}, '', apikey);
};