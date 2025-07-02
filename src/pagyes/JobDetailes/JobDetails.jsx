import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const {title,company,deadline} =useLoaderData();

  return (
    <div className='m-4'>
      <h2 className='text-2xl'>job deatils for : {title}</h2>
      <p>Apply for : {company}</p>
      <p>deadline :{deadline}</p>
      <button className='btn btn-primary'>Apply Now</button>
    </div>
  );
};

export default JobDetails;