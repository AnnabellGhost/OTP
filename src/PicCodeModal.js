/*Created by Zhang Xingping on 20170507*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SingleInput from './SingleInput.js';
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
        e.target.name==='code'?this.setState({picCodeValue:e.target.value}):null;
    }
    render(){
        return(
            <div>
                <SingleInput
                    name='code'
                    inputType='text'
                    content={this.state.picCodeValue}
                    controlFunc={e=>this.handlePicCodeInput(e)}
                />
                <img src={this.props.picCodeUrl}/>
                <button>Submit</button>
            </div>
        );
    }
}
export default PicCode;