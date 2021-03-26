import { createStore, applyMiddleware } from 'redux'
// import { countReducer } from './../reducers/userReducer'
import { apiReducer } from './../Reducer/Reducer'
import thunk from 'redux-thunk'

const store = createStore( apiReducer ,applyMiddleware(thunk)) 

export default store