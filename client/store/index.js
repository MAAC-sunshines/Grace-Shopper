import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import instruments from '../reducers/instruments';
import selectedInstrument from '../reducers/selectedInstrument';
import selectedCategory from '../reducers/singleCategory';

const reducer = combineReducers({
  user,
  instruments,
  selectedInstrument,
  selectedCategory
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from '../reducers/singleCategory'
