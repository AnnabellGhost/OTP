/*Created by Zhang Xingping on 20170507*/
/*Sms and PicCodeModal should be paralle*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SingleInput from './SingleInput.js';
import {run,validateRules} from './runValidation.js';
import {required,lengthMustBe} from './rules.js';
const inputValidation=[
    validateRules('smsValue','SMS',lengthMustBe(4)),
    // validateRules('picCodeValue','PicCode',lengthMustBe(4)),
];
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
        this.handleInputBlur=this.handleInputBlur.bind(this);
        this.state.validationErrors=run(this.state,inputValidation);
    }
    handleSmsInput(e){
        console.log(e.target.name+' is '+e.target.value);
        //dispatch action to change the SMS userinput
        /*set validation errors that run(); returns */
        let newState=Object.assign({},this.state,{smsValue:e.target.value});
        newState.validationErrors=run(newState,inputValidation);
        this.setState(newState);
    }
    handleInputBlur(e){
        console.log('blur');
        this.setState({showError:true});
    }
    render(){
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
            </div>
        );
    }
}

export default Sms;