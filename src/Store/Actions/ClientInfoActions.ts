import { ClientInfoDispatchTypes, CLIENTINFO_LOADING, CLIENTINFO_ERROR, CLIENTINFO_SUCCESS, ClientInfo, SET_CLIENTINFO_LOADING, SET_CLIENTINFO_SUCCESS, SET_CLIENTINFO_ERROR } from "../../Types/Redux/ClientInfoTypes";
import { Dispatch } from "redux";
import api from "../../Services/api";


export const SetClientInfo = (clientInfo: ClientInfo) => async (dispatch: Dispatch<ClientInfoDispatchTypes>) => {
    
    try{
        dispatch({
            type:  SET_CLIENTINFO_LOADING
        })

        const asyncResponse = await api.post(`/ClientInfo/Save`, clientInfo)
        
        delete asyncResponse.data._id
        delete asyncResponse.data.__v
        dispatch({
            type: SET_CLIENTINFO_SUCCESS,
            payload: asyncResponse.data
        })

    } catch(ex) {
        dispatch({
            type: SET_CLIENTINFO_ERROR
        })
    }
}

export const GetClientInfo = (cpf: string) => async (dispatch: Dispatch<ClientInfoDispatchTypes>) => {
    try{
        dispatch({
            type:  CLIENTINFO_LOADING
        })
        const asyncResponse = await api.get(`/ClientInfo/${cpf}`)
        
        dispatch({
            type: CLIENTINFO_SUCCESS,
            payload: asyncResponse.data
        })

    } catch(ex) {
        dispatch({
            type: CLIENTINFO_ERROR
        })
    }
}