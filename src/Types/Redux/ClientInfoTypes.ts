export const CLIENTINFO_LOADING = 'CLIENTINFO_LOADING'
export const CLIENTINFO_ERROR = 'CLIENTINFO_ERROR'
export const CLIENTINFO_SUCCESS = 'CLIENTINFO_SUCCESS'

export const SET_CLIENTINFO_LOADING = 'SET_CLIENTINFO_LOADING'
export const SET_CLIENTINFO_ERROR = 'SET_CLIENTINFO_ERROR'
export const SET_CLIENTINFO_SUCCESS = 'SET_CLIENTINFO_SUCCESS'

export type ClientInfo = {
    CPF: string
    Code: string
}

export interface ClientInfoLoading {
    type: typeof CLIENTINFO_LOADING
}

export interface ClientInfoError {
    type: typeof CLIENTINFO_ERROR
}

export interface ClientInfoSuccess {
    type: typeof CLIENTINFO_SUCCESS,
    payload: ClientInfo
}

export interface SetClientInfoLoading {
    type: typeof SET_CLIENTINFO_LOADING
}

export interface SetClientInfoError {
    type: typeof SET_CLIENTINFO_ERROR
}

export interface SetClientInfoSuccess {
    type: typeof SET_CLIENTINFO_SUCCESS,
    payload: ClientInfo
}


export type ClientInfoDispatchTypes = ClientInfoLoading | ClientInfoError | ClientInfoSuccess | SetClientInfoLoading | SetClientInfoError | SetClientInfoSuccess