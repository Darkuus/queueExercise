export const PRIQUEUE_LOADING = 'PRIQUEUE_LOADING'
export const PRIQUEUE_ERROR = 'PRIQUEUE_ERROR'
export const PRIQUEUE_SUCCESS = 'PRIQUEUE_SUCCESS'

export type PriQueueType = {
    priQueue: priQueue[]
}

export type priQueue = {
    CPF: string
    Code: string
    Status: 1
}

export interface PriQueueLoading {
    type: typeof PRIQUEUE_LOADING
}

export interface PriQueueError {
    type: typeof PRIQUEUE_ERROR
}

export interface PriQueueSuccess {
    type: typeof PRIQUEUE_SUCCESS,
    payload: priQueue[]
}

export type PriQueueDispatchTypes = PriQueueLoading | PriQueueError | PriQueueSuccess