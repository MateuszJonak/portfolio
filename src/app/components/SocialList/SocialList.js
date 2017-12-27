import React from 'react';
import { ICONS } from './icons';
import SocialIcon from './SocialIcon';

import './SocialList.scss';

const ICON_SIZE = 24;
const CIRCLE_SIZE = 40;

const iconProps = {
  height: ICON_SIZE,
  width: ICON_SIZE,
};
const iconWrapperProps = {
  size: CIRCLE_SIZE,
  style: { padding: (CIRCLE_SIZE - ICON_SIZE - 2) / 2 },
};

const SocialList = () => (
  <ul className="social-list list-inline">
    {ICONS.map((icon, index) => (
      <li key={index}>
        <a target="_blank" rel="noopener noreferrer" {...icon.linkProps}>
          <SocialIcon {...iconWrapperProps} {...icon.wrapperProps}>
            <icon.ComponentIcon {...iconProps} />
          </SocialIcon>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialList;
