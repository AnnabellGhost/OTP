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

/*payload:{
        planName:'Deposite ',
        bankCardNo:'123456789',
        amount:'2500',
    }*/
export function getJobs(){
    return async(dispatch,getState)=>{
        const response=await fetch('http://codepen.io/jobs.json',{
                header:{
                    'Access-Control-Allow-Origin':'*',
                }
        });
        const data=await response.json();
        return dispatch({
            type:'FETCH_JOB_INFO',
            jobs:data.jobs,
        });
        
    }
}