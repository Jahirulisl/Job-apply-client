import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
  //for data loade need state start>
  const [jobs, setJobs] = useState([]);
    //out site thaka data lod ti useeffict>
  useEffect(()=>{
   fetch('http://localhost:5000/jobs')
   .then(res =>res.json())
   .then(data =>{
     setJobs(data);
   })
  },[])
  //for data loade need state start>
  return (
    <div>
      <h1>Hot 
        jobs
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          jobs.map(job =><HotJobCard key={job._id} job={job}>
          </HotJobCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;