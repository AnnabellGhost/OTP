/*Created by Zhang Xingping on 20170507*/
/*the run() function returns a key-value pair or validation errors*/
import {required,lengthMustBe} from './rules.js';
export const validateRules=(key,name,...validations)=>{
    return (state)=>{
        for(let v of validations){
            console.log("state[key]"+state[key]);
            console.log('V is  '+ v);
            let errorMessageFunc=v(state[key],state);
            console.log('errorMessageFunc '+errorMessageFunc);
            if(errorMessageFunc) {return {[key]:errorMessageFunc(name)};}
        }
        return null;
    }
};
export const run=(state,runners)=>{
    return runners.reduce((memo,runner)=>{
        return Object.assign(memo,runner(state));
    },{});
};
