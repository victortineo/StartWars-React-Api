import {
    SET_FILTER,
    SET_FILTER_TYPE,
    SET_ORDER
} from '../actions/filter'

const initialState = {
    type: '',
    'order': 'films',
    'filter': ''
}

export default function movies (state = initialState, action){
    switch(action.type){
        case SET_FILTER: 
            return {
                ...state,
                filter: action.filter
            }
        case SET_ORDER:
            return {
                ...state,
                order: action.order
            }
        case SET_FILTER_TYPE: 
            return {
                ...state,
                type: action.type
            }
        default:
            return state
    }
}