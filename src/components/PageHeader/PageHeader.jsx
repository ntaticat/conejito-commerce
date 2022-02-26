import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const PageHeader = ({ titulo }) => {
  return (
    <div className="sticky z-20 top-0 left-0 bg-white border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
      <h1>{ titulo }</h1>
      <Link to="/" className='absolute top-0 right-0 py-2 px-3 bg-gray-900 text-white'> <FontAwesomeIcon size='lg' icon={faArrowAltCircleLeft} /> </Link>
    </div>
  );
};

export default PageHeader;