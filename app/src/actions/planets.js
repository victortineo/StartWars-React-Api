import Api from '../utils/api';

const api = new Api()

export const SET_PLANETS = 'SET_PLANETS';

function setPlanets (planet){
    return {
        type: SET_PLANETS,
        planet
    }
}

export function handleSetPlanets ( ){
    return (dispatch) => {
        return api.planets()
            .then((planets) => {
                dispatch(setPlanets(planets))
            })
            .catch(() => { alert('Sorry bro, there was an error, try again') })
    }
}