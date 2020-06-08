import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';


const MenuItem = ({id, imageUrl, title, size,linkUrl, match, history}) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)} 
      className={`${size} menu-item`} >
       <div className="background-image" style={{ 
        backgroundImage: `url(${imageUrl})`
     }}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">
          SHOP NOW
        </span>
      </div>
    </div>
  )
}

export default  withRouter(MenuItem);