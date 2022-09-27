import React from 'react';

const PlayerCart = ({handleDelete,singlePlayer,singlePlayer:{strPlayer}}) => {
    
    return (
        <div>
            <ul>
                <div className='flex mx-auto justify-center items-center p-5 my-5'>
                    <li className='mr-2 mb-5'>
                        {strPlayer}
                    </li>
                    <button onClick={()=>handleDelete(singlePlayer)} className='bg-green-400 px-3 py-2'> X </button>
                </div>
            </ul>
        </div>
    );
};

export default PlayerCart;