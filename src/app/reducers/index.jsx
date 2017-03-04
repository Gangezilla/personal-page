import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from './home-reducer.jsx'
import HOCReducer from './HOC-reducer.jsx'
import cardReducer from './card-reducer.jsx'

const rootReducer = combineReducers ({
	homeReducer,
	HOCReducer,
	cardReducer,
})

export default rootReducer