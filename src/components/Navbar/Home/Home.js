import React, { useEffect, useState } from 'react';
import CardContainer from '../../CardContainer/CardContainer';
import Player from '../../Player/Player';

const Home = () => {

    const [players , setPlayers] = useState([]);
    const [search,setSearch] = useState("");

    // ** player cart container state change

    const [player,setPlayer] = useState([]);

    const [bookmark,setBookmark] = useState([])

    // ** Event handlers
    const handleAddToCart = (playerSelected)=>{
        

        const newPlayer = [...player,playerSelected];

        setPlayer(newPlayer)

    }

    const handleDelete = (playerSelected)=>{
        
        const newPlayer = [...player];

        const restAfterDelete = newPlayer.filter(player => player.idPlayer !== playerSelected.idPlayer);
        setPlayer(restAfterDelete)

    };

    const handleBookMark = (productBookmarked)=>{
        const {strPlayer,idPlayer,strCutout} = productBookmarked;

        const playerInfo = {
            strPlayer,
            idPlayer,
            strCutout,
            quantity:1,
            bookmark:true
        };

        

        const storedData = JSON.parse(localStorage.getItem('bookmark'));

        if (storedData) {
            const exist = storedData.find(player=> player.idPlayer === productBookmarked.idPlayer);
           
            if (exist) {
                const rest = storedData.filter(player=> player.idPlayer !== productBookmarked.idPlayer)
                exist.quantity = exist.quantity + 1;
                localStorage.setItem('bookmark',JSON.stringify([...rest,exist]));
            } else{
                localStorage.setItem('bookmark',JSON.stringify([...storedData,playerInfo]));
            }
        } else{
            localStorage.setItem('bookmark',JSON.stringify([playerInfo]));
        }

       
        
    }

    // ** lets bring the data here

    useEffect(()=>{
        // ** Loader function
        const loadPlayers = async()=>{
            try {
                const response = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`);
                response.ok?console.log('Ok'): console.log('not ok');
                const data = await response.json();
                setPlayers(data?.player);
            } catch (error) {
                console.log(error);
            }
        };

        loadPlayers()
    },[search])



    return (
        <div className='lg:grid lg:grid-cols-12 container mx-auto'>
          <div className='lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:row-ends-3'>
            <input onChange={(event)=> setSearch(event.target.value)} type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mb-5" />
            <CardContainer handleBookMark={handleBookMark} handleAddToCart={handleAddToCart} players = {players}/>
          </div>
          <div className='lg:col-start-11 lg:col-end-12'>
            <Player handleDelete={handleDelete} player={player} />
          </div>  
        </div>
    );
};

export default Home;