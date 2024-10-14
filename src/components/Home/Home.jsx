import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../shared/PageTitle/PageTitle';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             {/* shared components */}
             <PageTitle title='Job Category List' shortTitle='Explore thousands of job opportunities with all the information you need. its your future'>
             </PageTitle>
             {/* category list */}
             <CategoryList></CategoryList>
              {/* featured jobs */}
              <PageTitle title='Featured Jobs' shortTitle='Explore thousands of job opportunities with all the information you need. its your future' >
              </PageTitle>
              <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;