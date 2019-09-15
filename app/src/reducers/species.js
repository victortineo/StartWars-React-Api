import { RECEIVE_DATA } from '../actions/shared'

export default function species (state = [], action){
    switch(action.type){
        case RECEIVE_DATA:
            return action.species
        default:
            return state
    }
}