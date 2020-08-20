import { PriQueueDispatchTypes, PRIQUEUE_LOADING, PRIQUEUE_ERROR, PriQueueType, priQueue, DISABLE_PRIQUEUE_LOADING, DISABLE_PRIQUEUE_SUCCESS, DISABLE_PRIQUEUE_ERROR } from "../../../Types/Redux/PriQueueTypes"
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
        case DISABLE_PRIQUEUE_LOADING:
            return {
                loading: true,
                priQueue: []
            }
        case DISABLE_PRIQUEUE_ERROR:
            return {
                loading: false,
                priQueue: []
            }
        case DISABLE_PRIQUEUE_SUCCESS:
            return {
                loading: false,
                priQueue: []
            }
        default:
            return state
    }
}

export default priQueueReducer