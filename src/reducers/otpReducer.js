/*Created by Zhang Xingping on 20170508*/
const initalState = {
    smsData:{
        isSendingSms:false,
        smsResultCode:'',
        captchaUrl:'',
        picCode:'',
        smsUserInput:'',
    }
};
export default function otp(state = initalState, action){
    switch (action.type) {
        case 'START_SENDING_SMS':
            return Object.assign({},state,{
                smsData:{isSendingSms:true}
            });
        case 'SEND_SMS':
            return Object.assign({},state,{
                smsData:{
                    isSendingSms:false,
                    smsResultCode:action.payload.resultCode,
                    captchaUrl:action.payload.captchaUrl,
                }
            });
        case 'REFRESH_CAPTCHAS':
            return Object.assign({},state,{
                smsData:{
                    captchaUrl:action.payload.captchaUrl,
                }
            });
        default:
          return state;
    }
}
