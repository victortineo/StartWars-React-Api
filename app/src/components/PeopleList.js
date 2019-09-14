import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../static/peopleList.scss'
import Card from './Card';
import { applyFilter } from '../utils/applyFilter';

class PeopleList extends Component {
    
    getRelatedMovies = person => {
        const {movies} = this.props
        const relatedMovies = person.films.map(movie => movies.filter(i => movie === i.episode_id)[0])
        return relatedMovies
    }

    render(){
        const { people, filter } = this.props
        return(
            <ul className="people">
                {people && people.map(person => 
                    <li className="people__item" key={`person_${person.id}`}>
                        <Card info={person} order={filter.order} links={this.getRelatedMovies(person)}/>
                    </li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = ({people, movies, filter}) => {
    const orderedPeople = applyFilter(people, filter)
    
    return {
        people: orderedPeople,
        movies,
        filter,
    }
}

export default connect(mapStateToProps)(PeopleList)