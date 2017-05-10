import React,{PropTypes} from 'react';
const InputError=({...props})=>{
    return(<p>{props.errorText}</p>);
}
export default InputError;
// props.showError?"block":"none"