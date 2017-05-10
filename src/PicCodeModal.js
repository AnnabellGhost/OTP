/*Created by Zhang Xingping on 20170507*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SingleInput from './SingleInput.js';
import {run,validateRules} from './runValidation.js';
import {required,lengthMustBe} from './rules.js';
import {recordPicCode} from './actions/otpAction.js';
const inputValidation=[
    validateRules('picCodeValue','PicCode',required,lengthMustBe(4)),
];
class PicCode extends Component{
    constructor(props){
        super(props);
        this.state={
            picCodeValue:'',
            showError:false,
            validationErrors:{},
        };
        this.handlePicCodeInput=this.handlePicCodeInput.bind(this);
    }
    handlePicCodeInput(e){
        console.log(e.target.value);
        // e.target.name==='code'?this.setState({picCodeValue:e.target.value}):null;
        let newState=Object.assign({},this.state,{picCodeValue:e.target.value});
        newState.validationErrors=run(newState,inputValidation);
        this.setState(newState);
        //dispatch action to change the SMS userinput
        this.props.recordPicCode(e.target.value);
    }
    render(){
        return(
            <div>
                <SingleInput
                    name='picCodeValue'
                    inputType='text'
                    content={this.state.picCodeValue}
                    controlFunc={e=>this.handlePicCodeInput(e)}
                    errorText={this.state.validationErrors.picCodeValue}
                />
                <img src={this.props.picCodeUrl}/>
                <button>SubmitPicCode</button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    recordPicCode: bindActionCreators(recordPicCode, dispatch),
  };
};
export default connect(null,mapDispatchToProps)(PicCode);
