import {CHANGE} from './characterTypes'

const initialState = {
    numOfCakes: 10
}
const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE: return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state 
    }
}

export default characterReducer