import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="3xl">Application for this job:{applications.length}</h2>
    </div>
  );
};

export default VewApplications;