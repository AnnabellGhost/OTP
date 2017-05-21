const initialState={
    bankCards:[],
}
export default function bankcards(state=initialState,action){
    switch(action.type){
        case 'GET_BANK_CARD_LIST':
            return Object.assign({},state,{bankCards:action.bankCards});
        default:
            return state;
    }
}