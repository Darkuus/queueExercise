interface PriQueue{
    Code: string
    Cpf: string
}

interface PriQueueState {
    PriQueue: PriQueue[],
}

type Action = {type: "ADD_PRIQUEUE", payload: PriQueue}

const initialState = {
    PriQueue: []
}
export const PriQueueReducer = (state:PriQueueState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_PRIQUEUE": {
            return {...state, priQueue: [action.payload]}
        }
        default:
            return state
    }
}