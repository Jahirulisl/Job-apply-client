import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ParivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //from location start>
 const location =useLocation();
 console.log(location);
  //from location end>

  //for loading start>
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }
  //for loading end>

  if (user) {
    return children
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>
};

export default ParivateRoute;