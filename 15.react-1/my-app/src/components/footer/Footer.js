import React from 'react';
import './footer.css'

export const Footer = (props) => {
    return (
        <li className="footer-item">{props.name}</li>
    );
};