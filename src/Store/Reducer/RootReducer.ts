import {combineReducers} from 'redux'
import priQueueReducer from './PriQueue/PriQueueReducer'

const RootReducer = combineReducers({
    priQueue: priQueueReducer
})

export default RootReducer