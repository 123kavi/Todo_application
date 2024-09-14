import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.username}</h1>
      ) : (
        <div>
          <h1>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link></h1>
        </div>
      )}
    </div>
  );
};

export default Home;
