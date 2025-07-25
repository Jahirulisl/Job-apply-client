import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
  //for need some data start>
const [jobs,setJobs] =useState([]);
const {user} = useAuth();//j login kora
useEffect(()=>{
  fetch(`https://job-applly-server.vercel.app/jobs?email=${user.email}`)
  .then(res =>res.json())
  .then(data=>{
    setJobs(data)
  })
},[user.email])
   //for need some data start>
  return (
    <div>
      <h2 className='text-3xl'>Posted Jobs:{jobs.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Vew Applications</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map((job,index)=><tr>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>
          <Link to={`/vewapplications/${job._id}`}>
            <button className='btn btn-link'>Vew Applications</button>
          </Link>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyPostedJobs;