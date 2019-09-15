import Api from '../utils/api';

const api = new Api()

export const SET_FILMS = 'SET_FILMS';

function setFilms (films){
    return {
        type: SET_FILMS,
        films
    }
}

export function handleSetPeople ( cb ){
    return (dispatch) => {
        return api.films()
            .then((films) => {
                dispatch(setFilms(films))
                cb && cb()
            })
            .catch(() => { alert('Sorry bro, there was an error, try again') })
    }
}