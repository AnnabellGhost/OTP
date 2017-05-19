/*Created by Zhang Xingping on 20170515*/
const initalState = {
    isfetchingTransIn:false,
    planName:'',
    bankCardNo:'',
    deposite:'',
    frequnency:'',
    date:'',
    validationToken:''
};
function transin(state = initalState, action){
   switch(action.type){
    case 'UPDATE_USER_INPUT':
        return Object.assign({},state,{...action.payload});
    case 'GET_PLAN_DETAIL':
        return Object.assign({},state,{...action.payload});
    case 'EDIT_PLAN_NAME':
        return Object.assign({},state,{planName:action.planName});
    case 'FETCH_JOB_INFO':
        return Object.assign({},state,{jobs:action.jobs});
    default:
        return state;
   }
}

export default transin;
