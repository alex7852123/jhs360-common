import request from '../../request'


const apikey = 'anniversary';

/**
 * 活动前置接口-活动数据
 */
export function activityData(){
   return request('/front/activityData', {},'',apikey)
}

/**
 * 抽奖
 */
export function lottery(){
   return request('/front/lottery', {},'',apikey)
} 
/**
 * 送祝福
 */
export function bless(){
   return request('/front/bless', {},'',apikey)
}
/**
 * 分享
 */
export function share(){
   return request('/front/share', {},'',apikey)
}
/**
 * 我的好礼
 */
export function myBlessPrizes(pageSize,pageNumber){
   return request('/front/myBlessPrizes', {pageSize,pageNumber},'',apikey)
}
/**
 * 中奖记录
 */
export function myLotteryPrizes(pageSize,pageNumber){
   return request('/front/myLotteryPrizes',  {pageSize,pageNumber},'',apikey)
}
/**
 * 幸运播报
 */
export function lotteryPrizes(){
   return request('/front/lotteryPrizes', {},'',apikey)
}