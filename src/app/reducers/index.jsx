import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from './home-reducer.jsx'

const rootReducer = combineReducers ({
	homeReducer,
})

export default rootReducer