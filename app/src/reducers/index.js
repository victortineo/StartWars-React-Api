import { combineReducers } from 'redux'
import people from './people'
import films from './films'
import filter from './filter'
import species from './species'
import planets from './planets'

export default combineReducers({
    people, films, filter, species, planets
})