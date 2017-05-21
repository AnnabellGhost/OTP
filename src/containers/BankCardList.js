import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBankCardList} from '../actions/bankcardAction.js';
class BankCardList extends React.Component{
    constructor(props){
        super(props);
        this.props.getBankCardList();
    }
    // 
    render(){
        return(
            <ul>
                {this.props.bankCards.map((bankCard)=>{
                    console.log('In BankCards Map Method');
                   return this.props.condition===bankCard.type||this.props.condition==='all'?
                   <li key={bankCard.No}><i>{bankCard.name}</i> {bankCard.No}</li>:null
                })
                }
            </ul>
        )
    }
}
function mapStateToProps(state){
    return{
        bankCards:state.bankcards.bankCards,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getBankCardList:bindActionCreators(getBankCardList,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BankCardList);