import { ClientInfoDispatchTypes, CLIENTINFO_SUCCESS, CLIENTINFO_ERROR, CLIENTINFO_LOADING, ClientInfo, SET_CLIENTINFO_ERROR, SET_CLIENTINFO_LOADING, SET_CLIENTINFO_SUCCESS } from "../../../Types/Redux/ClientInfoTypes"

interface InitialState {
    loading: boolean
    clientInfo: ClientInfo
}

const initialState : InitialState = {
    loading: false,
    clientInfo: {} as ClientInfo
}

const clientInfoReducer = (state:InitialState = initialState, action: ClientInfoDispatchTypes): InitialState => {
    switch(action.type){
        case CLIENTINFO_LOADING:
            return {
                loading: true,
                clientInfo: {} as ClientInfo
            }
        case CLIENTINFO_ERROR:
            return {
                loading: false,
                clientInfo: {} as ClientInfo
            }
        case CLIENTINFO_SUCCESS:
            return {
                loading: false,
                clientInfo: action.payload
            }
        case SET_CLIENTINFO_LOADING:
            return {
                loading: true,
                clientInfo: {} as ClientInfo
            }
        case SET_CLIENTINFO_ERROR:
            return {
                loading: false,
                clientInfo: {} as ClientInfo
            }
        case SET_CLIENTINFO_SUCCESS:
            return {
                loading: false,
                clientInfo: action.payload
            }

        default:
            return state
    }
}

export default clientInfoReducer