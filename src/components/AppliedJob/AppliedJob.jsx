import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utillity/localstorage";
import Job from "../Job/Job";
import { IoIosArrowDropdown } from "react-icons/io";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs]= useState([]);

  const handleJobFilter=(filter)=>{
    // condition for all jobs filter
     if(filter ==='all'){
        setDisplayJobs(appliedJobs)
     }
    //  condition for remote job filter
     else if( filter ==='remote'){
         const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Remote')
         setDisplayJobs(remoteJobs);
     }
    //  condition for all site job
    else if(filter ==='onsite'){
        const onsiteJobs= appliedJobs.filter(job => job.remote_or_onsite ==='Onsite')
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied=[];
      // for(const id of storedJobIds){
      //     const job= jobs.find(job=> job.id ===id)
      //     if(job){
      //         jobsApplied.push(job);
      //     }
      // }
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobsApplied,storedJobIds, jobs)
    }
  }, []);
  return (
    <>
      {/* Applied job banner */}
      <div className="bg-[url('https://i.ibb.co.com/nss6bgK/bg2.png')] bg-cover bg-center h-64 w-full flex items-center justify-center">
        <h2 className="text-4xl font-bold">Applied Jobs</h2>
      </div>
      {/* dropdown for filter */}

      <div className="flex justify-end mt-10 mb-5">
           <details className="dropdown">
              <summary className="btn m-1">Filter <span className="text-xl font-medium"><IoIosArrowDropdown /></span> </summary>
             <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                  <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                  <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
             </ul>
           </details>
      </div>

      {/* applied jobs */}
      <div className="">
        {displayJobs.map((appliedJob) => (
          <Job key={appliedJob.id} appliedJob={appliedJob}></Job>
        ))}
      </div>
    </>
  );
};

export default AppliedJob;
