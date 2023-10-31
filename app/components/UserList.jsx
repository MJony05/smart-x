import UserItem from './UserItem';

import React from 'react';

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user, i) => (
        <li
          key={user.id}
          style={{ backgroundColor: i % 2 === 0 ? 'white' : 'inherit' }}
        >
          <UserItem user={user} />
        </li>
      ))}
    </>
  );
};

export default UserList;
