/*Created by Zhang Xingping on 20170508*/
const initalState = {
    smsData:{
        isSendingSms:false,
        smsResultCode:'1000',
        captchaUrl:'./images/a.jpg',
        picCodeUserInput:'',
        smsUserInput:'',
        PicCodePass:false,
    }
};
function otp(state = initalState, action){
    switch (action.type) {
        case 'SUBMIT_OTP':
            return state;
        case 'RECORD_SMS':
            return Object.assign({},state,{
                    smsData:{
                        ...state.smsData,
                        smsUserInput:action.SmsInput,
                    }
            });
        case 'START_SENDING_SMS':
            return Object.assign({},state,{
                smsData:{isSendingSms:true}
            });
        case 'SEND_SMS':
            return Object.assign({},state,{
                smsData:{
                    ...state.smsData,
                    isSendingSms:false,
                    smsResultCode:action.payload.resultCode,
                    captchaUrl:action.payload.captchaUrl,
                }
            });
        case 'RECORD_PIC_CODE':
            return Object.assign({},state,{
                    smsData:{
                        ...state.smsData,
                        picCodeUserInput:action.PicCode,
                    }
            });
        case 'VERIFY_PIC_CODE':
            return Object.assign({},state,{
                    smsData:{
                        ...state.smsData,
                        PicCodePass:action.PicCodePass,
                    }
        });
        case 'REFRESH_CAPTCHAS':
        //reset PicCodePass=false
            return Object.assign({},state,{
                smsData:{
                    ...state.smsData,
                    captchaUrl:action.payload.captchaUrl,
                }
            });
        default:
          return state;
    }
}

export default otp;
