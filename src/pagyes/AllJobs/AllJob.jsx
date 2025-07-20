import React, { useState } from 'react';
import UseJobs from '../../hooks/UseJobs';
import HotJobCard from '../Home/HotJobCard';

const AllJob = () => {
  const { jobs, loading } = UseJobs();
  const [sort,setSort]= useState(false);
  console.log(sort);
  // if(loading) {
  //   return <h2 className='font-bold m-2'>Job is Loading</h2>
  // }
  return (
    <div>
      <h1 className='py-5 text-4xl font-bold  text-center'>All Job Here</h1>
  
      <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center'>
       <button onClick={()=>setSort(!sort)} className={`btn btn-naturl${sort &&  "btn-primary"}`}>
        {sort == true? "Sorted by salary":"Sort by salary"}
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          jobs.map(job => <HotJobCard key={job._id} job={job}>
          </HotJobCard>)
        }
      </div>
    </div>
  );
};

export default AllJob;