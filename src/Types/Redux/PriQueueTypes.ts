export const PRIQUEUE_LOADING = 'PRIQUEUE_LOADING'
export const PRIQUEUE_ERROR = 'PRIQUEUE_ERROR'
export const PRIQUEUE_SUCCESS = 'PRIQUEUE_SUCCESS'

export const PICKPRIQUEUE_LOADING = 'PICKPRIQUEUE_LOADING'
export const PICKPRIQUEUE_ERROR = 'PICKPRIQUEUE_ERROR'
export const PICKPRIQUEUE_SUCCESS = 'PICKPRIQUEUE_SUCCESS'

export const DISABLE_PRIQUEUE_LOADING = 'DISABLE_PRIQUEUE_LOADING'
export const DISABLE_PRIQUEUE_ERROR = 'DISABLE_PRIQUEUE_ERROR'
export const DISABLE_PRIQUEUE_SUCCESS = 'DISABLE_PRIQUEUE_SUCCESS'

export type PriQueueType = {
    priQueue: priQueue[]
}

export type priQueue = {
    CPF: string
    Code: string
    Status: 1
}

//#region PriQueue

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

//#endregion

//#region Pick_PriQueue
export interface PickPriQueueLoading {
    type: typeof PICKPRIQUEUE_LOADING
}

export interface PickPriQueueError {
    type: typeof PICKPRIQUEUE_ERROR
}

export interface PickPriQueueSuccess {
    type: typeof PICKPRIQUEUE_SUCCESS,
}
//#endregion

//#region Disable_PriQueue
export interface DisablePriQueueLoading {
    type: typeof DISABLE_PRIQUEUE_LOADING
}

export interface DisablePriQueueError {
    type: typeof DISABLE_PRIQUEUE_ERROR
}

export interface DisablePriQueueSuccess {
    type: typeof DISABLE_PRIQUEUE_SUCCESS,
}
//#endregion

export type PriQueueDispatchTypes = PriQueueLoading | PriQueueError | PriQueueSuccess 
                                    | PickPriQueueLoading | PickPriQueueError | PickPriQueueSuccess
                                    | DisablePriQueueLoading | DisablePriQueueError | DisablePriQueueSuccess