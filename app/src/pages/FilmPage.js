import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom' 

import PeopleList from '../components/PeopleList'
import Orderer from '../components/Orderer'

class FilmPage extends Component {
  componentDidMount = () => {

  }

  render(){
    const {current, cast} = this.props
    const releaseDate = new Date(current.release_date)
    const releaseDateString = `${releaseDate.getMonth()}/${releaseDate.getDate()}/${releaseDate.getFullYear()} `
    
    return (
      <div className="page-layout">
        <Link to={'/'}>Voltar</Link>
        <h1 className="page-layout__title">{current.title}</h1>
        <h2 className="page-layout__director">Directed By: {current.director}</h2>
        <p className="page-layout__release-date">Released at: {releaseDateString}</p>
        <h3 className="page-layout__subtitle">Cast: </h3>
        <Orderer />
        <PeopleList people={cast}/>
      </div>
    );
  }
}

const mapStateToProps = ({films, people}, props) => {
  const { match } = props
  const { params } = match
  const { id } = params
  const current = films.filter(i => i.id === parseInt(id))[0]
  const cast = current && current.characters && current.characters.map(i => people.filter(e => e.id === i)[0])
  return {
    current: current ? current : {},
    cast: cast ? cast : [],
    films,
  }
}

export default withRouter(connect(mapStateToProps)(FilmPage));
