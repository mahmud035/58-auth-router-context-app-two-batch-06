import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log('logOut successfully');
      })
      .catch((error) => {
        console.error('error', error);
      });
  };

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
        {user?.email && <p>Hello, {user.email}</p>}

        <Link to="/login" className="ml-auto">
          <button onClick={handleSignOut} className="btn btn-sm btn-ghost ">
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
