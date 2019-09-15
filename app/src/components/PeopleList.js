import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../static/peopleList.scss'
import Card from './Card';
import { applySorter } from '../utils/applyFilter';

class PeopleList extends Component {
    
    getRelatedFilms = person => {
        const {films} = this.props
        const relatedFilms = person.films.map(movie => films.filter(i => movie === i.episode_id)[0])
        return relatedFilms
    }

    getSpecie = specieId => {
        const { species } = this.props
        return specieId ? species.filter(specie => specie.id === specieId)[0] : 'N/A'
    }

    render(){
        const { people, filter } = this.props
        return(
            <ul className="people">
                {people && people.map(person => 
                    <li className="people__item" key={`person_${person.id}`}>
                        <Card info={person} order={filter.order} links={this.getRelatedFilms(person)} pathUrl={'/film/'} specie={this.getSpecie(person.species[0])}/>
                    </li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = ({people, films, species, filter}, ownProps) => {
    const orderedPeople = applySorter(ownProps.people ? ownProps.people : people, filter)
    
    return {
        people: orderedPeople,
        films,
        filter,
        species
    }
}

export default connect(mapStateToProps)(PeopleList)