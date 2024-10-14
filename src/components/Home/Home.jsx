import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <PageTitle title='Job Category List' shortTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'></PageTitle>
        </div>
    );
};

export default Home;