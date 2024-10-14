import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs]=useState([]);
    const [dataLength, setDataLength]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setFeaturedJobs(data))
    },[])
    return (
         <div>
             <div className="grid grid-cols-2 gap-10 my-10">
            {
                featuredJobs.slice(0,dataLength).map(featuredJob=> <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
            }
             </div>
             <div className={dataLength === featuredJobs.length && "hidden"}>
                   <div className="flex justify-center mb-10">
                         <button onClick={()=>setDataLength(featuredJobs.length)} className="btn text-white bg-blue-500 hover:bg-green-500 ">See All Jobs</button>
                    </div> 
             </div>

         </div>

    );
};

export default FeaturedJobs;