import React,{PropTypes} from 'react';
const InputError=(...props)=>{
    return(<span>{props.errorText}</span>);
}
export default InputError;
// props.showError?"block":"none"