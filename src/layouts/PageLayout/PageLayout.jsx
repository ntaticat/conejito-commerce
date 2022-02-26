import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const PageLayout = ({ children }) => {
  return (
    <div className="relative bg-white border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-col flex-nowrap w-screen h-screen">
      <PageHeader titulo={"ConejitoCommerce"} />
      {/* Content */}
      <div className="bg-white w-full h-full flex flex-wrap content-between">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;