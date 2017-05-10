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
        render(){
            console.log("this.props.smsData");
            return(<WrappedComponent data={this.state.data} {...this.props} />);
        }
    }

export default HocForOtp;
// export default HocForOtp;
