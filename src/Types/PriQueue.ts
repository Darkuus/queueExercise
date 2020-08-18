export interface PriQueue {
    CPF: any
    Code: any
    Status: any
}
export interface PriQueueState {
    data: PriQueue[]
}

export const PRIQUEUE_SUCCESS = 'PRIQUEUE_SUCCESS'

interface CreatePriQueueSuccess {
    type: typeof PRIQUEUE_SUCCESS
    payload: PriQueue[]
}

export type PriQueueActionsTypes = CreatePriQueueSuccess