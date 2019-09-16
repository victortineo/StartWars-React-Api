import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 

import PeopleList from '../components/PeopleList'
import PageLayout from '../components/PageLayout'
import StarWarsCrawler from '../components/StarWars-Crawler'
import '../static/filmPage.scss'

class FilmPage extends Component {
  state = {
    showCrawler: false
  }

  toggleCrawler = () => this.setState(prevState => ({showCrawler: !prevState.showCrawler}))

  render(){
    const {showCrawler} = this.state
    const {current, cast} = this.props
    const releaseDate = new Date(current.release_date)
    const releaseDateString = `${releaseDate.getMonth()}/${releaseDate.getDate()}/${releaseDate.getFullYear()} `
    const info = [
      `Directed By: ${current.director}`,
      `Released at: ${releaseDateString}`,
    ]
    return (
      <PageLayout classNames={'filmPage'} title={'Star Wars'} subtitle={current.title} info={info} hasHeader={true}>
        <p className="btn" onClick={this.toggleCrawler}>{showCrawler ? 'close' : 'Watch opening'}</p>
        { showCrawler &&
          <StarWarsCrawler crawlText={current.opening_crawl} title={current.title} episode={current.episode_id}/>
        }
        <p className="filmPage__subtitle">Featured Characters</p>
        <PeopleList people={cast} showOptions={false}/>
      </PageLayout>
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
