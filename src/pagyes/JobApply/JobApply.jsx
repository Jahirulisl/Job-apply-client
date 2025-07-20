import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

 const JobApply = () => {
 const { id } = useParams();
 const { user } = useAuth();
 //use navigate for 
 const navigate =useNavigate();
  // console.log(id,user);

  //make even handler start>
  const submitJobApplication = e => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume
    };
    fetch('https://job-applly-server.vercel.app/job-applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/myapplications')
        }
      })
  }
  //make even handler start>
  return (

    <div className="card bg-base-100 w-full   shadow-2xl">
      <h1 className='text-5xl text-center font-bold'>Apply job and good luck</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="url" name="linkedIn" className="input input-bordered w-full" placeholder="LinkedIn URL" />
        </div>
        <div className='form-control'>
          <label className="label">
            <span className="label-text">
              Github URl
            </span>
          </label>
          <input type="url" name="github" className="input input-bordered w-full" placeholder="Github URl" />
        </div>
        <div className='form-control'>
          <label className="label">
            <span className="label-text">Resume URl</span>
          </label>
          <input type="url" name="resume" className="input input-bordered w-full" placeholder="Resume URl" />
        </div>
        <button className="btn btn-neutral mt-4">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
