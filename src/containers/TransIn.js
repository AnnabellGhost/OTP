/*Created by Zhang Xingping on 20170516*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlanDetail,editPlanName,updateUserInput} from '../actions/transinAction.js';
import BankCardList from './BankCardList.js';
import SingleInput from '../SingleInput.js';
import Button from '../components/ButtonTest.js'

class TransIn extends Component{
    constructor(props){
        super(props);
        console.warn("In constructor!");
        this.state={
            /*make it controlled By Store*/
            // planNameUserInput:props.planName,
            btnStatus:false,
            validationErrors:{},
            showbankSub:false,
            selectList:false,
            listType:'all',
        };
        this.handleTransinInput=this.handleTransinInput.bind(this);
        this.handleTransinClick=this.handleTransinClick.bind(this);
    }
    handleTransinInput(e){
        // console.log(e.target.value);
        /*and validation Passed sth like &&vlidationError[planName] is empty*/
        // e.target.name==='planName'?this.props.editPlanName(e.target.value):null;
        e.target.name==='planName'?this.props.updateUserInput(e.target.name,e.target.value):null;
        e.target.name==='deposite'?this.props.updateUserInput(e.target.name,e.target.value):null;
        e.target.name==='bankCardNo'?this.props.updateUserInput(e.target.name,e.target.value):null;
        
    }
    handleTransinClick(e){
        // alert("handle Input click");
        // this.props.getPlanDetail();
    }
    handleBankCardSelect(){

    }
    handleButtonClick(){
        this.props.updateUserInput('bankCardNo','e.target.value');
    }
    handleRenderList(){
        this.setState({selectList:!this.state.selectList});
    }
    handleBankCardSelection(e){
        // console.log(e);/*Mysterious*/
        this.setState({listType:e.target.value});
    }
    componentDidMount(){
        this.props.getPlanDetail();
    }
    render(){
        return(
            this.state.selectList?
            <div>
                <BankCardList condition={this.state.listType}/> 
                <Button 
                    onClick={this.handleRenderList.bind(this)}
                    ButtonName='RenderSomeList'
                />
                <select onChange={(e)=>this.handleBankCardSelection(e)} defaultValue='Please select a name'>
                    <option value="all">All</option>
                    <option value="mine">Mine</option>
                    <option value="others">Others</option>
                </select>
            </div>
            :
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
                    name='bankCardNo'
                    inputType='text'
                    content={this.props.bankCardNo}
                    controlFunc={e=>this.handleTransinInput(e)}
                    controlClick={e=>this.handleTransinClick(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.selectBankCard}
                    disabled='disabled'
                />
                <SingleInput
                    name='deposite'
                    inputType='text'
                    content={this.props.deposite}
                    controlFunc={e=>this.handleTransinInput(e)}
                    controlClick={e=>this.handleTransinClick(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.deposite}
                />
                <SingleInput
                    name='Date'
                    inputType='text'
                    content={this.props.deposite}
                    controlFunc={e=>this.handleTransinInput(e)}
                    controlClick={e=>this.handleTransinClick(e)}
                    showError={this.state.showError}
                    errorText={this.state.validationErrors.deposite}
                    disabled="disabled"
                />
                <Button 
                  onClick={this.handleButtonClick.bind(this)}
                  ButtonName='SetBankCard'
                />
                <Button 
                  onClick={this.handleRenderList.bind(this)}
                  ButtonName='RenderSomeList'
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    planName: state.transin.planName,
    bankCardNo:state.transin.bankCardNo,
    deposite:state.transin.deposite,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getPlanDetail: bindActionCreators(getPlanDetail, dispatch),
    editPlanName: bindActionCreators(editPlanName, dispatch),
    updateUserInput: bindActionCreators(updateUserInput, dispatch),
    
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TransIn);
// export default TransIn;
/*{this.state.showbankSub?
                    <BankSub onSelect={this.handleBankCardSelect}></BankSub>:null
                }*/