import React from 'react';

const SingleHotel = (props) => {
    const {name, img} = props.hotel;
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={img} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;