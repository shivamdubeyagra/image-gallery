import React from 'react';
import './Card.css'
const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={data.url} alt={data.title} />
            <div className="card-body">
                <h3 className="card-title">Random Title {data.id}</h3>
            </div>
        </div>
    );
};

export default Card;
