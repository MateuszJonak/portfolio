import React from 'react';
import './CircleImage.scss';

const CircleImage = ({ src }) => {
  return <img src={src} className="circle-image" alt="Avatar" />;
};

export default CircleImage;
