import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
  const {_id,title, company, company_logo, requirements, description, location, salaryRange,

  } = job;
  return (
    <div className="card bg-base-100 \shadow-sm">
      <div className='flex gap-2 m-2 items-center'>
        <figure className="px-10 pt-10">
          <img
            src={company_logo}
            alt="Shoes"
            className="rounded-xl w-16" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className='flex gap-1 items-center'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
        </div>

      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className='flex gap-2 flex-wrap'>
          {
            requirements.map(skill => <p
              className='border rounded-md text-center px-2 hover:text-blue-200 hover:bg-gray-500'>{skill}</p>)
          }
        </div>

        <div className="card-actions justify-end items-center mt-4">
          <p className='flex items-center'>salarry:<FaDollarSign></FaDollarSign>{salaryRange.min} -{salaryRange.max} {salaryRange.currency}</p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;