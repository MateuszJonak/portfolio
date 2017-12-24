import React from 'react';
import './Circle-Image.scss';

const CircleImage = ({ src }) => {
  return <img src={src} className="circle-image" alt="Avatar" />;
};

export default CircleImage;
