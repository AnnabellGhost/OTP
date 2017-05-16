/*Created by Zhang Xingping on 20170507*/
import React,{PropTypes} from 'react';
import InputError from './InputError.js';
function SingleInput({...props}){
    console.log(props.errorText);
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