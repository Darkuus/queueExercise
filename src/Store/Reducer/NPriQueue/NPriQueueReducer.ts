import { DISABLE_NPRIQUEUE_SUCCESS, nPriQueue, NPRIQUEUE_LOADING, NPRIQUEUE_ERROR, NPRIQUEUE_SUCCESS, DISABLE_NPRIQUEUE_LOADING, DISABLE_NPRIQUEUE_ERROR, NPriQueueDispatchTypes } from "../../../Types/Redux/NPriQueueTypes"

interface InitialState {
    loading: boolean,
    nPriQueue: nPriQueue[]
}

const initialState: InitialState = {
    loading: false,
    nPriQueue: []
}

const nPriQueueReducer = (state: InitialState = initialState, action: NPriQueueDispatchTypes) : InitialState => {
    switch(action.type){
        case NPRIQUEUE_LOADING:
            return {
                loading: true,
                nPriQueue: []
            }
        case NPRIQUEUE_ERROR:
            return {
                loading: false,
                nPriQueue: []
            }
        case NPRIQUEUE_SUCCESS:
            return {
                loading: false,
                nPriQueue: action.payload
            }
        case DISABLE_NPRIQUEUE_LOADING:
            return {
                loading: true,
                nPriQueue: []
            }
        case DISABLE_NPRIQUEUE_ERROR:
            return {
                loading: false,
                nPriQueue: []
            }
        case DISABLE_NPRIQUEUE_SUCCESS:
            return {
                loading: false,
                nPriQueue: []
            }
        default:
            return state
    }
}

export default nPriQueueReducer