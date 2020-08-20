import api from "../../Services/api"
import { Dispatch } from "redux"
import { SetClientInfo } from "./ClientInfoActions"
import { ThunkAction } from "redux-thunk"
import { PICK_NPRIQUEUE_LOADING, PICK_NPRIQUEUE_SUCCESS, PICK_NPRIQUEUE_ERROR, NPriQueueDispatchTypes, NPRIQUEUE_LOADING, NPRIQUEUE_SUCCESS, NPRIQUEUE_ERROR, DISABLE_NPRIQUEUE_LOADING, DISABLE_NPRIQUEUE_SUCCESS, DISABLE_NPRIQUEUE_ERROR } from "../../Types/Redux/NPriQueueTypes"

export const PickNPriQueue = (cpf: string):ThunkAction<any,any,any,any> => async dispatch => {
    try{
        dispatch({
            type: PICK_NPRIQUEUE_LOADING
        })
        const request = {
            cpf: cpf
        }
        const asyncResponse = await api.post('/NPriQueue/save/', request)
        delete asyncResponse.data.Status

        dispatch(SetClientInfo(asyncResponse.data))

        dispatch({
            type: PICK_NPRIQUEUE_SUCCESS
        })

    } catch(ex){
        dispatch({
            type: PICK_NPRIQUEUE_ERROR
        })
    }
}

export const GetNPriQueues = (status: number) => async (dispatch: Dispatch<NPriQueueDispatchTypes>) => {
    try{
        dispatch({
            type: NPRIQUEUE_LOADING
        })

        const asyncResponse = await api.get(`/NPriQueue/${status}`)
        
        dispatch({
            type: NPRIQUEUE_SUCCESS,
            payload: asyncResponse.data
        })

    } catch(ex){
        dispatch({
            type: NPRIQUEUE_ERROR
        })
    }
}

export const DisableNPriQueue = (code: string):ThunkAction<any,any,any,any> => async dispatch => {
    try{
        dispatch({
            type: DISABLE_NPRIQUEUE_LOADING
        })
        const request = {
            code : code
        }
        await api.post(`/NPriQueue/disable`, request)

        dispatch(GetNPriQueues(1))

        dispatch({
            type: DISABLE_NPRIQUEUE_SUCCESS,
        })

    } catch(ex){
        dispatch({
            type: DISABLE_NPRIQUEUE_ERROR
        })
    }
}