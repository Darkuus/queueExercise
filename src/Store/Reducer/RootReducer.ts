import {combineReducers} from 'redux'
import priQueueReducer from './PriQueue/PriQueueReducer'
import clientInfoReducer from './ClientInfo/ClientInfoReducer'
import nPriQueueReducer from './NPriQueue/NPriQueueReducer'

const RootReducer = combineReducers({
    priQueue: priQueueReducer,
    nPriQueue: nPriQueueReducer,
    clientInfo: clientInfoReducer,
})

export default RootReducer