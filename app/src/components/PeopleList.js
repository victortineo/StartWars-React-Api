import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Card from './Card';
import { applyFilter } from '../utils/applyFilter';
import Filter from './Filter';
import Orderer from './Orderer';
import {getSpecie, getRelatedFilms} from '../utils/utils'
import '../static/people-list.scss'

class PeopleList extends Component {

    render(){
        const { people, filter, species, films, showOptions = true } = this.props
        return(
            <Fragment>
                {showOptions && 
                    <div className="people__header">
                        <Orderer />
                        <Filter />
                    </div>
                }
                <ul className="people">
                    {people && people.length > 0 ? people.map(person => 
                        <li className="people__item" key={`person_${person.id}`}>
                            <Card info={person} order={filter.order} links={getRelatedFilms(person, films)} pathUrl={'/film/'} specie={getSpecie(person.species[0], species)}/>
                        </li>
                    ) : 
                        <li className="people__item">None found</li>
                    }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = ({people, films, species, filter}, ownProps) => {
    const orderedPeople = applyFilter(ownProps.people ? ownProps.people : people, filter)
    
    return {
        people: orderedPeople,
        films,
        filter,
        species
    }
}

export default connect(mapStateToProps)(PeopleList)