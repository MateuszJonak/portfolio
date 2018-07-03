import React from 'react';
import './Card.scss';

const Card = ({ children, styleName, ...rest }) => {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  );
};

export default Card;
