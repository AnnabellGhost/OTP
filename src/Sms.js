/*Created by Zhang Xingping on 20170507*/
/*Sms and PicCodeModal should be paralle*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SingleInput from './SingleInput.js';
import {run,validationRules} from './runValidation.js'
/*const inputValidation=[
    validationRule('smsValue','SMS',required),
    validationRule('picCodeValue','PicCode',required),
];*/
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
        this.handleInputFocus=this.handleInputFocus.bind(this);
    }
    handleSmsInput(e){
        console.log(e.target.name+' is '+e.target.value);
        e.target.name==='sms'?this.setState({smsValue:e.target.value}):null;
        //dispatch action to change the SMS userinput
        /*set validation errors that run(); returns */

    }
    handleInputFocus(e){
        console.log('focus');
    }
    render(){
        return(
            <div>
                <SingleInput
                    name='sms'
                    inputType='text'
                    content={this.state.smsValue}
                    controlFunc={e=>this.handleSmsInput(e)}
                    controlFocus={e=>this.handleInputFocus(e)}
                />
            </div>
        );
    }
}

export default Sms;