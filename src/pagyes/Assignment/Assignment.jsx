import React from 'react';

const Assignment = () => {
  const handleAddJob = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData)
    const {min, max,currency,...newJob} = initialData;
    console.log(min,max,currency,newJob)
    newJob.salaryRange={
      min,max,currency
    }
    console.log(newJob);

    fetch('',{
      method:"POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newJob)
    })
    .then(res=res.json())
    .then(data=>{
      console.log(data)
    })
  }
  return (
    <div>
      <h2 className='text-3xl'>
        post A New job
      </h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* jobTitle Start */}
        <div className='form-control'>
          <label className="label">job Title </label>
          <input type="text" name='title' className="input input-bordered w-full" placeholder="jobTitle " required />
        </div>
        {/* jobTitle end */}

        {/* job location start */}
        <div className='form-control'>
          <label className="label">
            <span className='label-text'>job location</span>
          </label>
          <input type="text" name='location' className="input input-bordered w-full" placeholder="location" required />
        </div>
        {/* job location end */}

        {/* job Type start*/}
        <div className='form-control'>
          <label className="label">
            <span className='label-text'>job Type</span>
          </label>

          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>Pick a job Type</option>
            <option>Intern</option>
            <option>Full-Time</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job Type end */}

        {/* job catagory start*/}
        <div className='form-control'>
          <label className="label">
            <span className='label-text'>job Field</span>
          </label>

          <select className="select select-ghost w-full max-w-xs" name='currency'>
            <option disabled selected>Pick a job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teching</option>
          </select>
        </div>
        {/* job catagory end */}

        {/* salary range start */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
          <div className='form-control'>
            <label className="label">
              <span className='label-text'>Salary Range</span>
            </label>
            <input type="number" name='Min' className="input input-bordered w-full" placeholder="Min Sallary" required />
          </div>

          <div className='form-control'>
            <input type="number" name='Max' className="input input-bordered w-full" placeholder="Max Sallary" required />
          </div>

          <div className='form-control'>
            <label className="label">
              <span className='label-text'></span>
            </label>

            <select className="select select-ghost w-full max-w-xs">
              <option disabled selected>BDT</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* job description */}
        <div className='form-control'>
          <label className="label">job description </label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Job Descrippton" name='discription' required></textarea>
        </div>

        {/* company name start */}
        <div className='form-control'>
          <label className="label">
            <span className='label-text'>company name</span>
          </label>
          <input type="text" name='company' className="input input-bordered w-full" placeholder="company name" required />
        </div>
        {/* company name end */}

        {/* Company Requerments start */}
        <div className='form-control'>
          <label className="label">Job Requerment </label>
          <textarea className="textarea textarea-bordered w-full" placeholder="put each requerments in a new line" name='Requerment' required></textarea>
        </div>
        {/* Company Requerments end */}

        {/* responsibilites start */}
        <div className='form-control'>
          <label className="label">Job Responsibilites </label>
          <textarea className="textarea textarea-bordered w-full" placeholder="write responsibilite  in a new line" name='responsibilites' required></textarea>
        </div>
        {/* responsibilites end */}

        {/* Hr name start */}
        <div className='form-control'>
          <label className="label"> Hr Name</label>
          <input type="text" name='hrname' className="input input-bordered w-full" placeholder="Hr Name " required />
        </div>
        {/* Hr name end */}

        {/* Hr Email start */}
        <div className='form-control'>
          <label className="label"> Hr Email</label>
          <input type="email" name=' hremail' className="input input-bordered w-full" placeholder=" Hr Email " required />
        </div>
        {/* Hr Email start */}

        {/* company logo start */}
        <div className='form-control'>
          <label className="label">Company_logo</label>
          <input type="url" name='logourl' className="input input-bordered w-full" placeholder="Company_logo " required />
        </div>
        {/* company logo end*/}

        {/* Submit Button */}
        <button className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
};

export default Assignment;