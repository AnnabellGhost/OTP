/*Created by Zhang Xingping on 20170515*/
const initalState = {
    isfetchingTransIn:false,
    planName:'',
    bankCardNo:'',
    amount:'',
    frequnency:'',
    date:'',
    validationToken:''
};
function transin(state = initalState, action){
   switch(action.type){
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
