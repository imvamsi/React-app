import React, { Component } from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Navbar from './components/navbar';
import Login from './components/loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>

<Navbar/>
      <main className = "container">
        <Switch>
          <Route path = "/login" component={Login}/>
          <Route path ="/movies" component={Movies}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/customers" component={Customers}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found" component={NotFound}/>

        </Switch>
      </main>

      </React.Fragment>
      
    );
  }
}

export default App;
