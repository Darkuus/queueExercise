import api from "../../Services/api"
import { PRIQUEUE_LOADING, PRIQUEUE_SUCCESS, PRIQUEUE_ERROR, PriQueueDispatchTypes, PICKPRIQUEUE_SUCCESS, PICKPRIQUEUE_LOADING, PICKPRIQUEUE_ERROR, DISABLE_PRIQUEUE_LOADING, DISABLE_PRIQUEUE_ERROR, DISABLE_PRIQUEUE_SUCCESS } from "../../Types/Redux/PriQueueTypes"
import { Dispatch } from "redux"
import { SetClientInfo } from "./ClientInfoActions"
import { ThunkAction } from "redux-thunk"
import { PriQueue } from "../../Types/PriQueue"

export const PickPriQueue = (cpf: string):ThunkAction<any,any,any,any> => async dispatch => {
    try{
        dispatch({
            type: PICKPRIQUEUE_LOADING
        })
        const request = {
            cpf: cpf
        }
        const asyncResponse = await api.post('/PriQueue/save/', request)
        delete asyncResponse.data.Status

        dispatch(SetClientInfo(asyncResponse.data))

        dispatch({
            type: PICKPRIQUEUE_SUCCESS
        })

    } catch(ex){
        dispatch({
            type: PICKPRIQUEUE_ERROR
        })
    }
}

export const GetPriQueues = (status: number) => async (dispatch: Dispatch<PriQueueDispatchTypes>) => {
    try{
        dispatch({
            type: PRIQUEUE_LOADING
        })

        const asyncResponse = await api.get(`/PriQueue/${status}`)

        dispatch({
            type: PRIQUEUE_SUCCESS,
            payload: asyncResponse.data
        })

    } catch(ex){
        dispatch({
            type: PRIQUEUE_ERROR
        })
    }
}

export const DisablePriQueue = (code: string):ThunkAction<any,any,any,any> => async dispatch => {
    try{
        dispatch({
            type: DISABLE_PRIQUEUE_LOADING
        })
        const request = {
            code : code
        }
        await api.post(`/PriQueue/disable`, request)

        dispatch(GetPriQueues(1))

        dispatch({
            type: DISABLE_PRIQUEUE_SUCCESS,
        })

    } catch(ex){
        dispatch({
            type: DISABLE_PRIQUEUE_ERROR
        })
    }
}