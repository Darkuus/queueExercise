import { PriQueueDispatchTypes, PRIQUEUE_LOADING, PRIQUEUE_ERROR, PriQueueType, priQueue } from "../../../Types/Redux/PriQueueTypes"
import { PRIQUEUE_SUCCESS } from "../../../Types/PriQueue"

interface InitialState {
    loading: boolean,
    priQueue: priQueue[]
}

const initialState: InitialState = {
    loading: false,
    priQueue: []
}

const priQueueReducer = (state: InitialState = initialState, action: PriQueueDispatchTypes) : InitialState => {
    switch(action.type){
        case PRIQUEUE_LOADING:
            return {
                loading: true,
                priQueue: []
            }
        case PRIQUEUE_ERROR:
            return {
                loading: false,
                priQueue: []
            }
        case PRIQUEUE_SUCCESS:
            return {
                loading: false,
                priQueue: action.payload
            }
        default:
            return state
    }
}

export default priQueueReducer