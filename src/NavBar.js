import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn-nav">Home</button>
      </Link>
      <Link to="/meal-comp">
        <button className="btn-nav">Meal comp</button>
      </Link>

      <Link to="/show-image">
        <button className="btn-nav"> Show Image</button>
      </Link>
      <Link to="/display-data">
        <button className="btn-nav">Display Data</button>
      </Link>

      <Link to="/form">
        <button className="btn-nav">Form</button>
      </Link>
      <Link to="/counter">
        <button className="btn-nav">counter</button>
      </Link>
    </div>
  );
};

export default NavBar;
