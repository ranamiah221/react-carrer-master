import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setFeaturedJobs(data))
    },[])
    return (
        <div className="grid grid-cols-2 gap-10 my-10">
            {
                featuredJobs.map(featuredJob=> <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
            }
        </div>
    );
};

export default FeaturedJobs;