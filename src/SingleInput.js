/*Created by Zhang Xingping on 20170507*/
import React,{PropTypes} from 'react';
function SingleInput({...props}){
// class SingleInput extends React.Component{
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
                readOnly={props.onlyRead?props.onlyRead:false}
            />
            {/*<InputError display={props.showError&&props.errorText!=''}/>*/}
        </div>
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