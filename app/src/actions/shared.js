import Api from '../utils/api'

export const RECEIVE_DATA = 'RECEIVE_DATA';        

function receiveData(people, movies){
    return {
        type: RECEIVE_DATA,
        people,
        movies
    }
}

export function handleInitialData () {
    const api = new Api();
    return (dispatch) => {
        Promise.all([
            api.people(),
            api.movies()
        ]).then(([ people, movies ]) => {
            dispatch(receiveData(people, movies))
        })
    }
}