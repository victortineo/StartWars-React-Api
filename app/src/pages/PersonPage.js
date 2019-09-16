import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import PageLayout from '../components/PageLayout';
import {handleSetPlanets} from '../actions/planets'
import { getSpecie, getRelatedFilms, getHomeworld } from '../utils/utils';

import '../static/person.scss'

class PersonPage extends React.Component {
    componentDidMount = () => {
        const { dispatch } = this.props
        dispatch(handleSetPlanets())
    }

    render(){
        const {current, homeworld, relatedFilms, specie} = this.props
        const parsedSpecie = specie ? `Specie: ${specie.name}` : ''
        const parsedHomeworld = homeworld ? `Homeworld: ${homeworld.name}` : ''
        const info = [parsedSpecie, parsedHomeworld]
        return (
            <PageLayout classNames="person-page" title={current.name} info={[...info]} hasHeader={true}>
                <div className="person-page__content">
                    <p className="person-page__subtitle">Related Movies</p>
                    <ul className="person-page__films">
                        {relatedFilms.map(film => 
                            <li key={`film_${film.id}`} className="person-page__film-item"><Link to={`/film/${film.id}`}>{film.title}</Link></li>
                        )}
                    </ul>
                </div>
            </PageLayout>
        );
    }
}

const mapStateToProps = ({people, species, films, planets}, props) => {
    const { match } = props
    const { params } = match
    const { id } = params
    const current = people.filter(i => i.id === parseInt(id))[0]
    const relatedFilms = current && current.films && films && getRelatedFilms(current, films)
    const homeworld = current && current.homeworld && planets && getHomeworld(current, planets)
    const specie = current && current.species && species && getSpecie(current.species[0], species)
    return {
        current: current ? current : {},
        relatedFilms: relatedFilms ? relatedFilms : [],
        homeworld: homeworld ? homeworld : [],
        specie,
    }
}

export default withRouter(connect(mapStateToProps)(PersonPage));

