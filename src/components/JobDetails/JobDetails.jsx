import { useLoaderData, useParams } from "react-router-dom";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaJoomla } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const handleApplyJob=()=>{
    toast('Applied job successfully')
  }
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  const { address, email, phone } = contact_information;
 

  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/RQfLhP8/bg1.png')] bg-cover bg-center h-64 w-full flex items-center justify-center">
        <h2 className="text-4xl font-bold">Job Details</h2>
      </div>
      {/* job details */}
      <div className="grid grid-cols-3 gap-10 my-16">
        {/* job description */}
        <div className="col-span-2">
          <p className="text-base font-bold mb-5 text-justify">
            Job Description :{" "}
            <span className="text-sm font-light text-gray-500">
              {job_description}
            </span>{" "}
          </p>
          <p className="text-base font-bold mb-5 text-justify">
            Job Responsibility :{" "}
            <span className="text-sm font-light text-gray-500">
              {job_responsibility}
            </span>{" "}
          </p>
          <p className="text-base font-bold mb-5">
            Educational Requirements : <br /> <br />{" "}
            <span className="text-sm font-light text-gray-500">
              {educational_requirements}
            </span>{" "}
          </p>
          <p className="text-base font-bold">
            Experiences : <br /> <br />{" "}
            <span className="text-sm font-light text-gray-500">
              {experiences}
            </span>{" "}
          </p>
        </div>
        {/* sidebar */}
        <div>
          <div className="bg-blue-100 p-5 h-max">
            <p className="text-base font-bold text-justify border-b-2 border-gray-400 pb-4">
              Job Details
            </p>
            <div className="py-3">
              <div className="flex items-center">
                <LuBadgeDollarSign />
                <p className="text-base font-semibold text-justify ml-2">
                  {" "}
                  Salary :{" "}
                  <span className="text-sm font-light text-gray-500">
                    {salary}
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-center">
                <FaJoomla />
                <p className="text-base font-semibold text-justify ml-2">
                  {" "}
                  Job Title :{" "}
                  <span className="text-sm font-light text-gray-500">
                    {job_title}
                  </span>{" "}
                </p>
              </div>
            </div>
            <p className="text-base font-bold text-justify border-b-2 border-gray-400 pb-4">
              Contract Information
            </p>
            <div className="py-3">
              <div className="flex items-center">
                <FaPhone></FaPhone>
                <p className="text-base font-semibold text-justify ml-2">
                  {" "}
                  Phone :{" "}
                  <span className="text-sm font-light text-gray-500">
                    {phone}
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-center">
                <MdMarkEmailUnread />
                <p className="text-base font-semibold text-justify ml-2">
                  {" "}
                  Email :{" "}
                  <span className="text-sm font-light text-gray-500">
                    {email}
                  </span>{" "}
                </p>
              </div>
              <div className="flex items-baseline">
                <MdLocationOn />
                <p className="text-base font-semibold text-justify ml-2">
                  {" "}
                  Address :{" "}
                  <span className="text-sm font-light text-gray-500">
                    {address}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          {/* apply now button */}
          <button onClick={handleApplyJob} className="w-full btn text-white bg-blue-500 hover:bg-green-500 mt-5">
            Apply Now
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default JobDetails;
