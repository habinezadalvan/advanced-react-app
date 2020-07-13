import React from 'react';
import '../styles/bigcard.css';
import ImageList from './ImageList';


const BigCard = ({images, input}) => {
    return(
        <div className="big-card">
            <div className="big-card__heading">
            <h1>{input}</h1>
            </div>
            <ImageList images={images} />
        </div>
    );
}

export default BigCard;