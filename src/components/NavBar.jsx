import React from 'react';
import { Link, NavLink, Router } from 'react-router-dom';

const NavBar= () => {

return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{color: "white"}}>Studio Ghibli</Link>
            <ul className="navbar-nav">
          <li className="nav-item">  <NavLink to="/films" className="nav-link active" style={{color: "white"}}>Films</NavLink></li>
          <li className="nav-item">  <NavLink to="/people" className="nav-link active" style={{color: "white"}}>People</NavLink></li>
            </ul>
        </div>

    </nav>
  
);

}
export default NavBar;