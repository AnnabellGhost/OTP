import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sms from './Sms.js';
import PicCode from './PicCodeModal.js';
class Otp extends Component {
  constructor(props){
    super(props);
    this.state={
      showPicCode:false,
    }
    this.handleOtpSubmit=this.handleOtpSubmit.bind(this);
  }
  handleOtpSubmit(){

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>OTP Demo</h2>
        </div>
        <Sms defaultV='Hey' />
        {this.state.showPicCode?<PicCode />:null}
        <button onSubmit={this.handleOtpSubmit}>Submit</button>
        {/*this button should belongs to parent comp of Sms Or cb with a url of picCode*/}
      </div>
    );
  }
}
//reducer has already got the smsInput and validated PicCode(if needed)
export default Otp;
