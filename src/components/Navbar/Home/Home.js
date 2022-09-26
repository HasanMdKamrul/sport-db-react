import React from 'react';
import CardContainer from '../../CardContainer/CardContainer';

const Home = () => {

    // ** lets bring the data here

    return (
        <div className='lg:grid lg:grid-cols-12 container mx-auto'>
          <div className='lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:row-ends-3'>
            <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mb-5" />
            <CardContainer/>
          </div>
          <div className='lg:col-start-11 lg:col-end-12'>Players</div>  
        </div>
    );
};

export default Home;