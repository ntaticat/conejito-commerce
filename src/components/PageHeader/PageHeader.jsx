import React from 'react';

const PageHeader = ({ titulo }) => {
  return (
    <div className="sticky top-0 left-0 bg-white border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
      <h1>{ titulo }</h1>
      <button className='absolute top-0 right-0 py-2 px-3 bg-gray-900 text-white'>Back</button>
    </div>
  );
};

export default PageHeader;