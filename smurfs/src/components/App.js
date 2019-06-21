import React, { Component } from 'react';
import './App.css';

import { getSmurfs } from '../actions';

import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import Landing from './Landing';
import Navbar from './Navbar';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const mapStateToProps = state => ({
  ...state
});

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/smurfs' render={props => <Smurfs {...props} smurfs={this.props.smurfs}/>} />
        <Route exact path='/smurfs/add' component={AddSmurf} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
