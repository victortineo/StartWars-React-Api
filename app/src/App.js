import React, {Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import PeoplePage from './pages/PeoplePage';
import FilmPage from './pages/FilmPage';
import PersonPage from './pages/PersonPage';
import StarWars from './components/StarWars-Crawler';
import './static/App.scss';
import './static/Reset.css';

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  
  render(){
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={PeoplePage} />
          <Route path="/film/:id" component={FilmPage} />
          <Route path="/person/:id" component={PersonPage} />
          <Route path="/starwars" component={StarWars} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
