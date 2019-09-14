import { combineReducers } from 'redux'
import people from './people'
import movies from './movies'
import filter from './filter'

export default combineReducers({
    people, movies, filter
})