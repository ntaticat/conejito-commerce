import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
     <h1>Page Not Found!</h1> 
     <p>Redirect to home  <Link to="/">click Here</Link> </p>
    </div>
  );
};

export default PageNotFound;