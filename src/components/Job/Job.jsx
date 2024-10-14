import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";

const Job = ({ appliedJob }) => {
  console.log(appliedJob);
  const {logo,
    job_title,
    company_name,
    remote_or_onsite,
    salary,
    job_type,
    location}=appliedJob;

  return (
    <div className="border-2 my-10 flex items-center justify-between p-10">
        {/* for img */}
           <div className="w-1/4 mr-5">
               <img className="bg-gray-200 py-20 px-20" src={logo} alt="" />
           </div>
        {/* for text */}
        <div className="w-2/4">
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
        </div>
        {/* for button */}
        <div className="flex-1 flex justify-end">
            <button className="btn text-white bg-blue-500 hover:bg-green-500">View Details</button>
        </div>
    </div>
  );
};

export default Job;
