import React,{PropTypes} from 'react';
/*Inheritance Inversion*/
function HocExample(WrappedComponent){
    return class extends React.Component{
        render(){
            return super.render();
        }
    }
}