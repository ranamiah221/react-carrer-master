import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../shared/PageTitle/PageTitle';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <PageTitle title='Job Category List' shortTitle='Explore thousands of job opportunities with all the information you need. its your future'>
             </PageTitle>
             {/* category list */}
             <CategoryList></CategoryList>
              
        </div>
    );
};

export default Home;