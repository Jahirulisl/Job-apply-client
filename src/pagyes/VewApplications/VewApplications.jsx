import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e,id) =>{
    console.log(e.target.value,id)
    const data ={
      status:e.target.value
    }
    fetch(`https://job-applly-server.vercel.app/job-applications/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
     .then(res => res.json())
     .then(data =>{


       if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title:"Your Application has been Updated",
                  showConfirmButton: false,
                  timer: 1500
                });    
              }
     })
  }
  return (
    <div>
      <h2 className="3xl">Application for this job:{applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Email</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              applications.map((app, index) => <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.application_email}</td>
                <td>Quality</td>
                <td>
                  <select 
                  onChange={(e) => handleStatusUpdate(e,app._id)}
                  defaultValue={app.status || 'Ching Status'}className="select select-md">
                  <option disabled>Ching Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Reject</option>
                </select>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VewApplications; 