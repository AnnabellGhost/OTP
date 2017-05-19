/*Created by Zhang Xingping on20170508*/
import * as ErrorMessages from './errorMessages.js';

export const required=(text)=> text?'':ErrorMessages.isRequired; 
export const lengthMustBe=(length)=>{
	console.warn(length);
    return (text)=>{      
        return text.length===length?'': ErrorMessages.lengthMustBe(4);
    }
}
