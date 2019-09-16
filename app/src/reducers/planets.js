import {
    SET_PLANETS,
} from '../actions/planets'


export default function planets (state = [], action){
    switch(action.type){
        case SET_PLANETS: 
            return action.planet
        default:
            return state
    }
}