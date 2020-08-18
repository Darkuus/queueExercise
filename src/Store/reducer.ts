import { PriQueueActionsTypes, PRIQUEUE_SUCCESS, PriQueueState } from '../Types/PriQueue'

const initialState: PriQueueState = {
    data: []
}

export function priQueueReducer (state = initialState, action: PriQueueActionsTypes): PriQueueState {
    switch(action.type){
        case PRIQUEUE_SUCCESS:
            return {...state, data: action.payload}
        default:
            return state
    }
}