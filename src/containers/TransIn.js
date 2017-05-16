/*Created by Zhang Xingping on 20170516*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlanDetail,editPlanName} from '../actions/transinAction.js';
import SingleInput from '../SingleInput.js';

class TransIn extends Component{
    constructor(props){
        super(props);
        this.state={
            /*make it controlled By Store*/
            // planNameUserInput:props.planName,
            btnStatus:false,
            validationErrors:{},
            showbankSub:false,
        };
        this.handleTransinInput=this.handleTransinInput.bind(this);
        this.handleTransinClick=this.handleTransinClick.bind(this);
    }
    handleTransinInput(e){
        // console.log(e.target.value);
        /*and validation Passed sth like &&vlidationError[planName] is empty*/
        e.target.name==='planName'?this.props.editPlanName(e.target.value):null;
        // e.target.name==='deposite'?this.props.editPlanName(e.target.value):null;
        
    }
    handleTransinClick(e){
        // alert("handle Input click");
        // this.props.getPlanDetail();
    }
    handleBankCardSelect(){

    }
    componentDidMount(){
        this.props.getPlanDetail();
    }
    render(){
        // console.log(this.props.jobs);
        return(
            <div>
                <SingleInput
                name='planName'
                inputType='text'
                content={this.props.planName}
                controlFunc={e=>this.handleTransinInput(e)}
                controlClick={e=>this.handleTransinClick(e)}
                showError={this.state.showError}
                errorText={this.state.validationErrors.planName}
                />
                <SingleInput
                    name='selectBankCard'
                    inputType='text'
                    content={this.state.bankCardNo}
                    controlFunc={e=>this.handleTransinInput(e)}
                    controlClick={e=>this.handleTransinClick(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.selectBankCard}
                />
                <SingleInput
                    name='deposite'
                    inputType='text'
                    content={this.state.bankCardNo}
                    controlFunc={e=>this.handleTransinInput(e)}
                    controlClick={e=>this.handleTransinClick(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.deposite}
                />
                
            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    planName: state.transin.planName,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getPlanDetail: bindActionCreators(getPlanDetail, dispatch),
    editPlanName: bindActionCreators(editPlanName, dispatch),
    
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TransIn);
// export default TransIn;
/*{this.state.showbankSub?
                    <BankSub onSelect={this.handleBankCardSelect}></BankSub>:null
                }*/