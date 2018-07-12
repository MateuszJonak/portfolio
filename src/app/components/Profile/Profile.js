import React from 'react';

import './Profile.scss';

const Profile = ({ fullName, jobTitle }) => (
  <div>
    <h1>{fullName}</h1>
    <hr />
    <h3 className="job-title">{jobTitle}</h3>
  </div>
);

export default Profile;
