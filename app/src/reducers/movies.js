import {
    SET_MOVIES,
} from '../actions/movies'

import { RECEIVE_DATA } from '../actions/shared'

export default function movies (state = [], action){
    switch(action.type){
        case SET_MOVIES: 
            return action.movies
        case RECEIVE_DATA:
            return action.movies
        default:
            return state
    }
}