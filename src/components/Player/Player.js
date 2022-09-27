import React from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';

const Player = ({handleDelete,player}) => {
  
    return (
        <div>
            <h1>Player count: {player.length} </h1>
               {
                 player?.map(singlePlayer => <PlayerCart handleDelete={handleDelete} key={Math.random()} singlePlayer={singlePlayer}/>)
               }
           
        </div>
    );
};

export default Player;