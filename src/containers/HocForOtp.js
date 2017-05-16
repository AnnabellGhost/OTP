import React ,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const HocForOtp =(WrappedComponent,dataSource)=>
    class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:'',
            }
            this.handleChange=this.handleChange.bind(this);
        }
        componentDidMount(){
            dataSource.addChangeListener(this.handleChange);
        }
        componentWillUnmount(){
            dataSource.removeChangeListener(this.handleChange);
        }
        handleChange(){
            this.setState({
                data:dataSource,
            });
        }
        /*proc(WrappedComponentInstanceFromCB){
            WrappedComponentInstanceFromCB.WrappedComponentInstanceMethod();
        }*/
        render(){
            console.log("this.props.smsData");
            // const props=Object.assign({},this.props,{ref:this.proc.bind(this)});
            return(<WrappedComponent data={this.state.data} {...this.props} />);
        }
    }

export default HocForOtp;
