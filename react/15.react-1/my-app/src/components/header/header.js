import React from 'react';
import './header.css'

export const Header = (props) => {
  return (
    <li className="header-item">{props.name}</li>
  );
};