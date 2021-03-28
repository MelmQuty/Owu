import React from 'react';
import './ProductCard.css'

export const ProductCard = (props) => {
    return (
      <div className={"ProductCard"}>
        <h2>{props.title}</h2>
        <h2>{props.price}</h2>
        <img src={props.img}/>
      </div>
    );
};