import request from '../../request'


const apikey = 'report';

/** 业绩数据·总览*/
export const overview = () => request('/overview', {},'',apikey);

/** 1.1 业绩数据—投资总额度*/
export const investAmount = () => request('/investAmount', {},'',apikey);

/** 1.2 投资用户数/投资次数*/
export const investByUsersAndNumber = () => request('/investByUsersAndNumber', {},'',apikey);

/** 1.3 业绩数据—投资用户排行榜*/
export const investAmountRank = () => request('/investAmountRank', {},'',apikey);
export const investNumberRank = () => request('/investNumberRank', {},'',apikey);

/** 1.4 业绩数据—借款笔数*/
export const loanNumber = () => request('/loanNumber', {},'',apikey);
export const loanNumberByProjectType = () => request('/loanNumberByProjectType', {},'',apikey);

/** 1.5 业绩数据—标的类型*/
export const subjectType = () => request('/subjectType', {},'',apikey);

/** 2.1 用户画像—花生用户年龄分布*/
export const userAgeGroupByCount = () => request('/userAgeGroupByCount', {},'',apikey);
export const userAgeGroupByAmount = () => request('/userAgeGroupByAmount', {},'',apikey);

/** 2.2 用户画像—花生用户地域分布*/
export const userArea = () => request('/userArea', {},'',apikey);

/** 2.3 用户画像——投资途径分布 */
export const userChannel = () => request('/userChannel', {},'',apikey);

/** 2.4 用户画像—花生用户活跃时间分布*/
export const userTimeByApp = () => request('/userTimeByApp', {},'',apikey);

/** 精彩活动，乐享投资 */
export const activity = () => request('/activity', {},'',apikey);