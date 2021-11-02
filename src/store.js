
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import articleReducer from './Reducers/articleReducer';
import loadReducer from './Reducers/loadReducer';
import notificationReducer from './Reducers/notificationReducer';


const reducer = combineReducers({
  articlesStore: articleReducer,
  isLoading: loadReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store