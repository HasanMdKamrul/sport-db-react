import React from 'react';

const SinglePlayer = ({player:{strNationality,strCutout}}) => {
    return (
        <div>
            <div className="card h-full card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={strCutout ? strCutout : "https://placeimg.com/200/280/arch"} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{strNationality}</h2>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;