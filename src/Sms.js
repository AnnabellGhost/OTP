/*Created by Zhang Xingping on 20170507*/
/*Sms and PicCodeModal should be paralle*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SingleInput from './SingleInput.js';
import {run,validateRules} from './runValidation.js';
import {required,lengthMustBe} from './rules.js';
import {recordSMS,sendSMS} from './actions/otpAction.js';
const inputValidation=[
    validateRules('smsValue','SMS',lengthMustBe(4)),
    // validateRules('picCodeValue','PicCode',lengthMustBe(4)),
];
function isEmptyObject(e){
    for(let t in e) return !1;
    return !0;
}
class Sms extends Component{
    constructor(props){
        super(props);
        this.state={
            smsValue:props.defaultV?props.defaultV:'',
            picCodeValue:'',
            showError:false,
            validationErrors:{},
            showPicCode:true,
        };
        this.handleSmsInput=this.handleSmsInput.bind(this);
        this.handleSendSms=this.handleSendSms.bind(this);
        this.state.validationErrors=run(this.state,inputValidation);
    }
    handleSmsInput(e){
        console.log(e.target.name+' is '+e.target.value);
        /*set validation errors that run(); returns */
        this.props.recordSMS(e.target.value);
        console.log(this.props.smsData);
        let newState=Object.assign({},this.state,{smsValue:e.target.value});
        newState.validationErrors=run(newState,inputValidation);
        this.setState(newState);
        //dispatch action to change the SMS userinput
        // isEmptyObject(newState.validationErrors)?this.props.recordSMS(e.target.value):null;
        // this.props.recordSMS(e.target.value);
    }
    componentDidUpdate(){
        console.log("DidUpdata Sms ");
    }
    handleSendSms(){
        //When Clicked,dispatch action to send SMS
        this.props.sendSMS();
    }
    handleInputBlur(e){
        // console.log(this.props.recordSMS);
        // this.setState({showError:true});
    }
    render(){
        console.log(this.state.validationErrors.smsValue);
        return(
            <div>
                <SingleInput
                    name='smsValue'
                    inputType='text'
                    content={this.state.smsValue}
                    controlFunc={e=>this.handleSmsInput(e)}
                    controlBlur={e=>this.handleInputBlur(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.smsValue}
                />
                <button onClick={this.handleSendSms}>Submit</button>
            </div>
        );
    }
}
// recordSMS
function mapStateToProps(state) {
  return {
    smsData: state.otp.smsData,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    recordSMS: bindActionCreators(recordSMS, dispatch),
    sendSMS:bindActionCreators(sendSMS, dispatch),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Sms);