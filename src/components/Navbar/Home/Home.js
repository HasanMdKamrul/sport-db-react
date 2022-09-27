import React, { useEffect, useState } from 'react';
import CardContainer from '../../CardContainer/CardContainer';

const Home = () => {

    const [players , setPlayers] = useState([])

    // ** lets bring the data here

    useEffect(()=>{
        // ** Loader function
        const loadPlayers = async()=>{
            try {
                const response = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p`);
                response.ok?console.log('Ok'): console.log('not ok');
                const data = await response.json();
                setPlayers(data?.player);
            } catch (error) {
                console.log(error);
            }
        };

        loadPlayers()
    },[])



    return (
        <div className='lg:grid lg:grid-cols-12 container mx-auto'>
          <div className='lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:row-ends-3'>
            <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mb-5" />
            <CardContainer players = {players}/>
          </div>
          <div className='lg:col-start-11 lg:col-end-12'>Players</div>  
        </div>
    );
};

export default Home;