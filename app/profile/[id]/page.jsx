'use client';
import React, { useEffect } from 'react';
// import styles from '../user.module.css';
import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { PieChart } from '@mui/x-charts/PieChart';
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
  const squares = Array.from({ length: 310 }, (_, i) => i + 1);
  return (
    <div className="user-page">
      <nav className="navbar">
        <h1 className="navbar-name">{user?.full_name}</h1>
        <div className="nav-logo">
          <Image src="/smart-logo.png" width={200} height={30} alt="logo" />
        </div>
        <Link href="/" className="link">
          &larr; Reytinga qaytish
        </Link>
      </nav>
      <div className="user-card">
        <div className="card-image">
          <Image
            src={`data:image/jpeg;base64,${user?.profile_picture}`}
            alt="User Profile"
            width={300}
            height={300}
            priority={false}
          />
        </div>
        <div className="card-info">
          <div className="card-info-name">
            <h1>{user?.full_name}</h1>
            <h3>{user?.viloyat}</h3>
          </div>
          <div className="card-info-steps">
            <h2>{user?.steps}</h2>
            <h3>Qadam</h3>
          </div>
        </div>
        <div className="card-qadam">
          <h3>310 qadam</h3>
          <div className="card-steps">
            {/* here should be 310 grey square and step number should green */}
            {squares.map((square) => (
              <div
                key={square}
                className={`square ${square < user?.steps ? 'highlight' : ''}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="card-statistic">
          <PieChart
            colors={['rgb(2, 189, 2)', '#f1f1f1']}
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: (user?.steps * 100) / 310,
                    label: 'Bosib otilgan ',
                  },
                  {
                    id: 1,
                    value: 100 - (user?.steps * 100) / 310,
                    label: 'Marragacha',
                  },
                ],
              },
            ]}
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
