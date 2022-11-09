function reducer(state=[], action){
    if (action.type==='addTodo'){
        return [...state, {id:state.length+1, title:action.description, completed:false}]
    }
    if(action.type==='removeTodo'){
        const newData=state.filter(item=>item.id!==action.id)
        return newData
    }
    if(action.type==='complete'){
        return state.map(item=>(item.id === action.id ? {...item, completed: true} : item))

        // const newData=[]
        // for(let i of state){
        //     if(i.id===action.id){
        //         newData.push({...i, completed:true})
        //     }else{
        //         newData.push(i)
        //     }
        // }
        // return newData
    }
    return state
}

export default reducer