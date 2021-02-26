import React from 'react';
import { Link, NavLink, Router } from 'react-router-dom';

const NavBar= () => {

return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Studio Ghibli</Link>
            <ul className="navbar-nav">
          <li className="nav-item">  <NavLink to="/films" className="nav-link active">Films</NavLink></li>
          <li className="nav-item">  <NavLink to="/people" className="nav-link active">People</NavLink></li>
            </ul>
        </div>

    </nav>
  
);

}
export default NavBar;