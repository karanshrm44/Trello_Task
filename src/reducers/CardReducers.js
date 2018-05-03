const initialReducer={
    cardArr:[['WelCome Home','Do Exercise'],['Australia','India']],
    cardname:''
}


const CardReducers=(state=initialReducer,action)=>{
    switch(action.type)
    {
        case "CARDVALUE":
        return {
            ...state,
            cardname:action.value
        }


        case "CARDARR":
        let narr=[...state.cardArr];
        narr[action.index].push(action.value);
        return {
            ...state,
            cardname:'',
            cardArr:[...narr]
        }


        case 'ADDLIST':
        let newCardArr=[...state.cardArr];
        newCardArr.push([]);
        return {
            ...state,
            cardArr:newCardArr
        }

        case 'CHANGECARD':
        console.log(action.value);
        console.log(action.index);
        console.log(action.Insideindex);
        let nCardArr=[...state.cardArr];
        nCardArr[action.index][action.Insideindex]=action.value
        return {
            ...state,
            cardArr:nCardArr
        }

        case 'DELETECARD':
        console.log(action.index);
        console.log(action.Insideindex);
        let nArray=[...state.cardArr];
         let   nArrays=nArray.map((val,ind)=>{
            if(ind===action.index)
            {
               let x= val.filter((val,index)=>{
                 return index!==action.Insideindex
                })
                return x;

            }
            else
            {
                return val;
            }
        })
        return {
            ...state,
            cardArr:nArrays
        }
        
    }

    return state;
}


export default CardReducers;