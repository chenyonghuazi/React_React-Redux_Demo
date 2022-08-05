const defaultState = {
    msg:"你好世界"
}

export default function reducer(state=defaultState,action){
    switch(action.type){
        case "changeMsgFn":
            return {...state,msg:action.value}

        default:
            return state
    }
    
}