/*Created by Zhang Xingping on 20170507*/
import React,{PropTypes} from 'react';
import InputError from './InputError.js';
/*function SingleInput({...props}){
    // console.log(props.errorText);
    console.log("re-Render Input");
    return(
        <div>
            <input 
                name={props.name}
                type={props.inputType}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                value={props.content}
                ref={props.inputRef}
                onChange={props.controlFunc}
                onBlur={props.controlBlur}
                onFocus={props.controlFocus}
                onClick={props.controlClick}
                readOnly={props.onlyRead?props.onlyRead:false}
            />
            <InputError errorText={props.errorText}/>
        </div>
        // display={props.showError&&props.errorText!=''} 
    );
}*/
class SingleInput extends React.Component{
    constructor(props){
        super(props);

    }
    shouldComponentUpdate(preProps,preState){
        return preProps.content===this.props.content ? false: true;
    }
    render(){
        console.log("re-Render Input");
        return(
            <div>
                <input 
                    name={this.props.name}
                    type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    value={this.props.content}
                    ref={this.props.inputRef}
                    onChange={this.props.controlFunc}
                    onBlur={this.props.controlBlur}
                    onFocus={this.props.controlFocus}
                    onClick={this.props.controlClick}
                    readOnly={this.props.onlyRead?this.props.onlyRead:false}
                    disabled={this.props.disabled?this.props.disabled:null}
                />
                <InputError errorText={this.props.errorText}/>
            </div>
        );
    }
}
/*SingleInput.propTypes={
    name:PropTypes.string.isRequired,
    inputType:PropTypes.oneof(['text','number']).isRequired,
    content:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
}*/

export default SingleInput;