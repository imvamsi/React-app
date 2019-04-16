import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Video rental</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/movies">Movies </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/customers">Customers</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/rentals">Rentals</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

      );
}
 
export default Navbar;