import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const CardContainer = ({handleAddToCart,players}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    players?.map(player => <SinglePlayer handleAddToCart={handleAddToCart} key={player.idPlayer} player={player} />)
                }
            </div>
        </div>
    );
};

export default CardContainer;