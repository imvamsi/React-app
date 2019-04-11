import React, { Component } from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';

class App extends Component {
  render() {
    return (
      <main className = "container">
        <Switch>
          <Route path ="/movies" component={Movies}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/customers" component={Customers}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found" component={NotFound}/>

        </Switch>
      </main>
    );
  }
}

export default App;
