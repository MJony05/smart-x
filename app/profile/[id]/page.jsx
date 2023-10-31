'use client';
import React from 'react';

const UserProfile = ({ params }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
};

export default UserProfile;
