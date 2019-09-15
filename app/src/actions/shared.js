import Api from '../utils/api'

export const RECEIVE_DATA = 'RECEIVE_DATA';        

function receiveData(people, films, species){
    return {
        type: RECEIVE_DATA,
        people,
        films,
        species
    }
}

export function handleInitialData () {
    const api = new Api();
    return (dispatch) => {
        Promise.all([
            api.people(),
            api.films(),
            api.species()
        ]).then(([ people, films, species ]) => {
            dispatch(receiveData(people, films, species))
        })
    }
}