const BANKCARDS=[
    {
        name:'HBSC',
        No:'6288888',
        type:'mine',
    },
    {
        name:'CNBK',
        No:'6277777',
        type:'others'
    },
]

export function getBankCardList(){
    return {
        type:'GET_BANK_CARD_LIST',
        bankCards:BANKCARDS,
    }
}