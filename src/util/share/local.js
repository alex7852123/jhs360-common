import {set} from '../cookie'
import * as constant from '../constant.js'
//location.
(function setQueryParamsCookie() {
    var index = location.href.lastIndexOf('?');
    var params = location.href.substring(index + 1).split("&");
    params.map(v=>{
        var arr = v.split('=');
        var key = arr[0],val = arr[1];
        switch(key){
            case 'ad' :{
                set(constant.SHARE_CHANNEL,val);
                break
            }
            case 'inviteSource' :{
                set(constant.SHARE_INVITE_SOURCE,val);
                break
            }
            case 'hm' :{
                set(constant.SHARE_HEX_MOBILE,val);
                break
            }
            case 'subid' :{
                set(constant.SHARE_CHANNEL_USER_ID,val);
                break
            }
            case 'regm' :{
                set(constant.SHARE_REGISTER_MOBILE,val);
                break
            }
            case 'ac' :{
                set(constant.ACTIVITY_CODE,val);
                break
            }
        }
    })
})()