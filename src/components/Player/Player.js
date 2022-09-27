import React from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';

const Player = ({handleDelete,player}) => {
  
    return (
        <div>
            <ul>
               {
                 player?.map(singlePlayer => <PlayerCart handleDelete={handleDelete} key={Math.random()} singlePlayer={singlePlayer}/>)
               }
            </ul>
        </div>
    );
};

export default Player;