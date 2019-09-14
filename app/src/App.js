import React, {Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import {
  handleInitialData
} from './actions/shared'
import PeopleList from './components/PeopleList';

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  
  render(){
    return (
      <div className="App">
        <PeopleList />
      </div>
    );
  }
}

export default connect()(App);
