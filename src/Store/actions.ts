import { PriQueueActionsTypes, PriQueue, PRIQUEUE_SUCCESS } from '../Types/PriQueue'
import api from '../Services/api'
import { Action } from "redux"
import {ThunkAction} from 'redux-thunk'

export const getPriQueue = (status: number): ThunkAction<any, any, any, Action> => async dispatch => {
    const response = await Promise.resolve(api.get(`/PriQueue/${status}`)
        .then((response: any) => {
            return response.data as PriQueue[]
        }))
    dispatch({
        payload: response,
        type: PRIQUEUE_SUCCESS
    })
}