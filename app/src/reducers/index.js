import { combineReducers } from 'redux'
import people from './people'
import movies from './movies'

export default combineReducers({
    people, movies
})