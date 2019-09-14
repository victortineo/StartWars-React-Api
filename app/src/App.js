import React, {Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import {
  handleInitialData
} from './actions/shared'
import PeopleList from './components/PeopleList';
import Orderer from './components/Orderer';

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  
  render(){
    return (
      <div className="App">
        <Orderer />
        <PeopleList />
      </div>
    );
  }
}

export default connect()(App);
