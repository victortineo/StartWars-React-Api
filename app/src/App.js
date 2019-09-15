import React, {Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {
  handleInitialData
} from './actions/shared'

import PeoplePage from './pages/PeoplePage';
import FilmPage from './pages/FilmPage';
import './App.scss';
import './Reset.css';
import './static/page-layout.scss'

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
        </Router>
      </div>
    );
  }
}

export default connect()(App);
