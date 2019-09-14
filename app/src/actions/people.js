import Api from '../utils/api';

const api = new Api()

export const SET_PEOPLE = 'SET_PEOPLE';

function setPeople (goal){
    return {
        type: SET_PEOPLE,
        goal
    }
}

export function handleSetPeople ( cb ){
    return (dispatch) => {
        return api.people()
            .then((people) => {
                dispatch(setPeople(people))
                cb && cb()
            })
            .catch(() => { alert('Sorry bro, there was an error, try again') })
    }
}