import {
    SET_PEOPLE,
} from '../actions/people'

import { RECEIVE_DATA } from '../actions/shared'

export default function people (state = [], action){
    switch(action.type){
        case SET_PEOPLE: 
            return action.people
        case RECEIVE_DATA:
            return action.people
        default:
            return state
    }
}