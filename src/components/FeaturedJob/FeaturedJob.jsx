import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const FeaturedJob = ({ featuredJob }) => {
  console.log(featuredJob);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    salary,
    job_type,
    location,
  } = featuredJob;
  return (
    <div className="border-2 pl-8 py-14">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
        <h2 className="text-xl font-bold mt-5">{job_title}</h2>
        <p className="text-base font-normal text-gray-500">{company_name}</p>
         <div className="mt-3">
            <button className="btn btn-outline mr-5 text-blue-500 hover:bg-gray-200 hover:text-black">{remote_or_onsite}</button>
            <button className="btn btn-outline text-blue-500 hover:bg-gray-200 hover:text-black">{job_type}</button>
        </div>
        <div className="flex items-center mt-2 mb-3">
            <div className="flex items-center mr-10">
                  <FaLocationDot />
                  <p>{location}</p>
            </div>
            <div className="flex items-center">
                  <LuBadgeDollarSign />
                 <p>{salary}</p>
            </div>
        </div>
        <Link to={`/jobs/${id}`}>
        <button className="btn text-white bg-blue-500 hover:bg-green-500">View Details</button> 
        </Link>
    </div>
  );
};

export default FeaturedJob;
