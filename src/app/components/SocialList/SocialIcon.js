import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SocialIcon.scss';

const SocialIcon = ({
  children,
  size,
  style,
  className,
  componentAs = 'div',
}) => {
  const Component = componentAs;
  return (
    <Component
      className={classNames('social-icon', className)}
      style={{ height: size, width: size, ...style }}>
      {children}
    </Component>
  );
};

SocialIcon.defaultProps = {
  size: 50,
  style: {},
};

SocialIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default SocialIcon;
