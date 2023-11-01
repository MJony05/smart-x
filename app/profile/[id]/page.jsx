'use client';
import React, { useEffect } from 'react';
import styles from '../user.module.css';
const UserProfile = ({ params }) => {
  // Fetch user data based on the 'id' parameter from your database or API
  // You can use the 'id' to query and display the user's profile
  // For example, if you are using posgresql
  const { id } = params;
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`/api/students/:${id}`);
      const data = await response.json();
      setUser(...data);
    };
    getUser();
  }, [id]);
  console.log(user);
  return (
    <div className={styles.userBox}>
      <h1>{user?.full_name}</h1>
      <p>{user?.steps}</p>
    </div>
  );
};

export default UserProfile;
