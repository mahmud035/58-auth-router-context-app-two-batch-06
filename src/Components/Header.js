import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
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
        {user?.displayName && <p>Hello, {user.displayName}</p>}
      </div>
    </div>
  );
};

export default Header;
