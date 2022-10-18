import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <NavLink className="btn btn-ghost normal-case text-xl">
          Awesome Auth
        </NavLink>
        <NavLink to="/home" className="btn btn-ghost normal-case text-xl">
          Home
        </NavLink>
        <NavLink to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </NavLink>
        <NavLink to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
