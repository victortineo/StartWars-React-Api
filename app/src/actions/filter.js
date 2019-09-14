export const SET_FILTER = 'SET_FILTER';
export const SET_ORDER = 'SET_ORDER';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';

function setOrder (order){
    return {
        type: SET_ORDER,
        order
    }
}

export function handleSetOrder ( order ){
    return (dispatch) => {
        return dispatch(setOrder(order))
    }
}

function setFilter (filter){
    return {
        type: SET_FILTER,
        filter
    }
}

export function handleSetFilter ( filter ){
    return (dispatch) => {
        return dispatch(setFilter(filter))
    }
}

function setFilterType (filter_type){
    return {
        type: SET_FILTER_TYPE,
        filter_type
    }
}

export function handleSetFilterType ( filter ){
    return (dispatch) => {
        return dispatch(setFilterType(filter))
    }
}