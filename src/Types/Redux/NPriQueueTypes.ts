export const NPRIQUEUE_LOADING = 'NPRIQUEUE_LOADING'
export const NPRIQUEUE_ERROR = 'NPRIQUEUE_ERROR'
export const NPRIQUEUE_SUCCESS = 'NPRIQUEUE_SUCCESS'

export const PICK_NPRIQUEUE_LOADING = 'PICKNPRIQUEUE_LOADING'
export const PICK_NPRIQUEUE_ERROR = 'PICKNPRIQUEUE_ERROR'
export const PICK_NPRIQUEUE_SUCCESS = 'PICKNPRIQUEUE_SUCCESS'

export const DISABLE_NPRIQUEUE_LOADING = 'DISABLE_NPRIQUEUE_LOADING'
export const DISABLE_NPRIQUEUE_ERROR = 'DISABLE_NPRIQUEUE_ERROR'
export const DISABLE_NPRIQUEUE_SUCCESS = 'DISABLE_NPRIQUEUE_SUCCESS'

export type NPriQueueType = {
    priQueue: nPriQueue[]
}

export type nPriQueue = {
    CPF: string
    Code: string
    Status: 1
}

//#region PriQueue

export interface NPriQueueLoading {
    type: typeof NPRIQUEUE_LOADING
}

export interface NPriQueueError {
    type: typeof NPRIQUEUE_ERROR
}

export interface NPriQueueSuccess {
    type: typeof NPRIQUEUE_SUCCESS,
    payload: nPriQueue[]
}

//#endregion

//#region Pick_PriQueue
export interface PickNPriQueueLoading {
    type: typeof PICK_NPRIQUEUE_LOADING
}

export interface PickNPriQueueError {
    type: typeof PICK_NPRIQUEUE_ERROR
}

export interface PickNPriQueueSuccess {
    type: typeof PICK_NPRIQUEUE_SUCCESS,
}
//#endregion

//#region Disable_PriQueue
export interface DisableNPriQueueLoading {
    type: typeof DISABLE_NPRIQUEUE_LOADING
}

export interface DisableNPriQueueError {
    type: typeof DISABLE_NPRIQUEUE_ERROR
}

export interface DisableNPriQueueSuccess {
    type: typeof DISABLE_NPRIQUEUE_SUCCESS,
}
//#endregion

export type NPriQueueDispatchTypes = NPriQueueLoading | NPriQueueError | NPriQueueSuccess 
                                    | PickNPriQueueLoading | PickNPriQueueError | PickNPriQueueSuccess
                                    | DisableNPriQueueLoading | DisableNPriQueueError | DisableNPriQueueSuccess