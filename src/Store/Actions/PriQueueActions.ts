import api from "../../Services/api"
import { PRIQUEUE_LOADING, PRIQUEUE_SUCCESS, PRIQUEUE_ERROR, PriQueueDispatchTypes } from "../../Types/Redux/PriQueueTypes"
import { Dispatch } from "redux"


export const GetPriQueue = (status: number) => async (dispatch: Dispatch<PriQueueDispatchTypes>) => {
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