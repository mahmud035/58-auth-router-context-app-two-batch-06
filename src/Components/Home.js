import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Component</h1>
      {user?.email && <p>Hello: {user.email}</p>}
    </div>
  );
};

export default Home;
