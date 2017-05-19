export function getPlanDetail(){
    return {
        type:'GET_PLAN_DETAIL',
        payload:{
            planName:'Deposite '
        }
    }
}
export function editPlanName(planNameUserInput){
    return {
        type:'EDIT_PLAN_NAME',
        planName:planNameUserInput,
        
    }
}
export function updateUserInput(whichOne,userInput){
    return {
        type:'UPDATE_USER_INPUT',
        payload:{[whichOne]:userInput},
    }
}
/*payload:{
        planName:'Deposite ',
        bankCardNo:'123456789',
        amount:'2500',
    }*/