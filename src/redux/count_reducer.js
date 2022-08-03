
import {INCREMENT,DECREMENT} from './constant'

const initalState = 0
function countReducer( prevState=initalState,action){

    const {type,data}=action

    switch(type){
        case INCREMENT:
            return prevState + data*1
        case DECREMENT:
            return prevState - data*1
        default:
            return prevState
    }
}

export default countReducer