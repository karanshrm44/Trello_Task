let initialStore={
    count:1,
    arr:['Backing','Priortized'],
    name:'',
    pos:null
}


const reducers=(state=initialStore,action)=>
{
    switch(action.type)
    {
        case "ADDLIST":
        let narr=[...state.arr];
        narr=narr.concat(action.value);
        return {
            ...state,
            name:'',
            arr:narr
        }

        case "LISTNAME":
        return {
            ...state,
            name:action.value
        }

        case "REMOVELIST":
        const newArray=[...state.arr];
        const newarray=newArray.filter((item,index)=>action.value!==index)
        return {
            ...state,
            value:'', 
            arr:newarray
        }
        case "LISTCHANGE":
        let  newaarray=[...state.arr];
        let naarr=newaarray.map((value,index)=>{
         if(index===action.index)
         {
             return action.value;
         }
         else
         {
             return value;
         }
        })
        return {
            ...state,
            name:'',
            arr:naarr
        }

        case "DISLIST":
         console.log(action.value);
         return {
             ...state,
             pos:action.value
         }

    }
    return state;
}


export default reducers;