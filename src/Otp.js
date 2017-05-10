import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sms from './Sms.js';
import PicCode from './PicCodeModal.js';
import { connect } from 'react-redux';
class Otp extends Component {
  constructor(props){
    super(props);
    this.state={
      showPicCode:true,
    }
    this.handleOtpSubmit=this.handleOtpSubmit.bind(this);
  }
  handleOtpSubmit(){

  }
  render() {
    console.log(this.props.smsData);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Demo By zxp</h2>
        </div>
        <Sms />
        {
          this.props.smsData.smsResultCode==='1181'?
          <PicCode 
            picCodeUrl={this.props.smsData.captchaUrl}

          />:
          null
        }
        <button onClick={this.handleOtpSubmit}>OTPSubmit</button>
        {/*this button should belongs to parent comp of Sms Or cb with a url of picCode*/}
      </div>
    );
  }
}
//reducer has already got the smsInput and validated PicCode(if needed)
function mapStateToProps(state) {
  return {
    smsData: state.otp.smsData,
  };
};
export default connect(mapStateToProps)(Otp);
