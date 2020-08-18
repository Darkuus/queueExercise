import { createStore } from 'redux'
import { PriQueueReducer } from './Reducer/PriQueueReducer'
import { composeWithDevTools  } from 'redux-devtools-extension'

export const store = createStore(PriQueueReducer, composeWithDevTools())