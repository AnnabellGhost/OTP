/*Created by Zhang Xingping on 20170508*/
function shouldSendSms(state) {
	const data = state.otp;
	if (data && data.isSendingSms) {
		return false
	}
	return true;
}
/*export function sendSMS(payload) {
    return async(dispatch, getState) => {
		//verify
		if (!shouldSendSms(getState())) {
			return Promise.resolve();
		}
		//dispatch fetch start action
		dispatch({
			type: 'START_SENDING_SMS'
		});
		//fetching
		const response = await fetch('/ReactDemo/allItems.json');
		console.log(response.headers.get('Content-Type'));
		//response
		const data = await response.json();
		//dispatch fetch end action
		return dispatch({
			type: 'SEND_SMS',
			payload
		});
	}
}*/
export function sendSMS() {
	return {
		type:'SEND_SMS',
		payload:{
			resultCode:'1181',
			captchaUrl:'./image/captcha.jpg',
		}
	}
}
export function recordSMS(SmsInput) {
    return {
		type:'RECORD_SMS',
		SmsInput,
	}
}
export function recordPicCode(PicCode) {
    return {
		type:'RECORD_PIC_CODE',
		PicCode,
	}
}
export function verifyPicCode(PicCode){//accesable via getState ...Do i really need this param?
	return (dispatch, getState)=>{
		dispatch({type:'VERIFY_PIC_CODE',PicCodePass:getState().otp.smsData.picCodeUserInput==='0225'});
		getState().otp.smsData.PicCodePass?dispatch(sendSMS()):null;//else dispatch REFRESHPICCODE
	}
	
	
	/*return async (dispatch,getState)=>{
		// dispatch({type:'IS_VERIFYING_PIC_CODE'});
		
		const response= await fetch ('/../api/PicCodeVerifyResult.json');//params
		const data= await response.json();
		if(data.resultCode==='1000'){
			sendSMS();
		}else{
			alert("verifyPicCode Fail");
		}
	}*/
	//dispatch({type:});
	/*return {
		type:'VERIFY_PIC_CODE',

	}*/
}
export function refreshCaptchaAction(params) {
    return (dispatch)=>{
       
    }
}
export function verifyCaptAction(params) {
    return (dispatch)=>{
       
    }
}