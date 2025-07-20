import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseJobs = (sort) => {
  const [jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/jobs?sort=${sort}`)
    .then(res =>{
      setLoading(false);
      setJobs(res.data);
    })
  },[]);
  return {jobs,loading};
};

export default UseJobs;