import {
    SET_FILMS,
} from '../actions/films'

import { RECEIVE_DATA } from '../actions/shared'

export default function films (state = [], action){
    switch(action.type){
        case SET_FILMS: 
            return action.films
        case RECEIVE_DATA:
            return action.films
        default:
            return state
    }
}