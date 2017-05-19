import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sms from './Sms.js';
import PicCode from './PicCodeModal.js';
import Button from './components/ButtonTest.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitOTP} from './actions/otpAction.js';
class Otp extends Component {
  constructor(props){
    super(props);
    this.state={
      isFetchingAllPlans:true,
    }
    this.handleOtpSubmit=this.handleOtpSubmit.bind(this);
  }
  handleOtpSubmit(){
    this.props.submitOTP();
  }
  handleButtonClick(){
    this.setState({isFetchingAllPlans:!this.state.isFetchingAllPlans});
  }
  render() {
    console.log(this.props.smsData);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Demo By zxp</h2>
        </div>
        <Sms defaultV='Deposit' />
        {
          this.props.smsData.smsResultCode==='1181'?
          <PicCode 
            picCodeUrl={this.props.smsData.captchaUrl}

          />:
          null
        }
        <button onClick={this.handleOtpSubmit}>OTPSubmit</button>
        <Button 
          isFetchingAllPlans={this.state.isFetchingAllPlans} 
          onClick={this.handleButtonClick.bind(this)}
          ButtonName='TestHoc'
        />
        <select>
          <option value="" disabled="disabled" selected="selected">Please select a name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>


        {/*this button should belongs to parent comp of Sms Or cb with a url of picCode*/}
      </div>
    );
  }
}
//reducer has already got the smsInput and validated PicCode(if needed)
function mapStateToProps(state) {
  return {
    smsData: state.otp.smsData,//smsResultCode is enough
  };
};
function mapDispatchToProps(dispatch) {
  return {
    submitOTP: bindActionCreators(submitOTP, dispatch),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Otp);
