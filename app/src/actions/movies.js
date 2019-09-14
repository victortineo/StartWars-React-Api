import Api from '../utils/api';

const api = new Api()

export const SET_MOVIES = 'SET_MOVIES';

function setMovies (goal){
    return {
        type: SET_MOVIES,
        goal
    }
}

export function handleSetPeople ( cb ){
    return (dispatch) => {
        return api.films()
            .then((movies) => {
                dispatch(setMovies(movies))
                cb && cb()
            })
            .catch(() => { alert('Sorry bro, there was an error, try again') })
    }
}