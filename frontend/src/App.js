import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import Signup from './components/Signup';
import Login from './containers/Login';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SimpleComponent from './components/simple-component';
class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();

  }
  signup (values) {
    axios.post('/user/signup', values)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" render={() => <Signup onSubmit={this.signup}/>} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={SimpleComponent} />
        </div>
      </Router>
      
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
