import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Chart } from 'react-google-charts';
import Skeleton from '@mui/material/Skeleton';
import StepProgress from './StepComponent';
import styles from './step.module.css';
const UserProfile = () => {
  const router = useRouter();

  const id = router.query.id;
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const getUser = async () => {
      if (!id) return;
      fetch(`/api/students/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    getUser();
  }, [id]);
  const squares = Array.from({ length: 310 }, (_, i) => i + 1);
  const data = [
    ['natija', 'qadam(in numbers)'],
    ["Bosib o'tildi", user?.steps],
    ['Marragacha', 310 - user?.steps],
  ];
  const options = {
    legend: 'none',
    pieSliceText: 'label',
    // pieStartAngle: 100,
    backgroundColor: 'transparent',
    slices: {
      0: { color: 'rgb(2, 189, 2)' },
      1: { color: '#f1f1f1' },
    },
    is3D: true,
    pieSliceTextStyle: {
      color: 'black',
      fontSize: 16,
    },
  };

  return (
    <div className="user-page">
      <nav className="navbar">
        <Link href="/" className="link">
          &larr; Reytinga qaytish
        </Link>
        <div className="nav-logo">
          <Image
            src="/smart-logo.png"
            priority={true}
            width={200}
            height={30}
            alt="logo"
          />
        </div>
        <h1 className="navbar-name">&nbsp; {user?.full_name}</h1>
      </nav>
      <div className="user-card">
        <div className="card-image">
          {loading ? (
            <Skeleton
              variant="circular"
              width="200px"
              height="200px"
              sx={{ bgcolor: 'rgba(255,255,255)' }}
            />
          ) : (
            <Image
              className="user-image"
              src={`data:image/jpeg;base64,${user?.profile_picture}`}
              alt="User Profile"
              width={300}
              height={300}
              priority={false}
            />
          )}
          <Image
            src="/location.png"
            alt="direction"
            className={styles.locationImage}
            width={450}
            height={100}
          />
        </div>
        <div className="card-info">
          {loading ? (
            <Skeleton
              variant="text"
              sx={{
                width: '70%',
                margin: '0 auto',
                fontSize: '2rem',
                bgcolor: 'rgba(255,255,255)',
              }}
            />
          ) : (
            <h1>{user?.full_name}</h1>
          )}
          <h2>{user?.description}</h2>
          <div className="info-item">
            <Image
              className="map-pin"
              alt="map pin"
              width={55}
              height={55}
              src={'/map-pin.png'}
            />{' '}
            {loading ? (
              <Skeleton
                variant="text"
                width={200}
                sx={{
                  fontSize: '2rem',
                  bgcolor: 'rgba(255,255,255)',
                }}
              />
            ) : (
              <h3>
                {' ' + user?.viloyat}, {user?.tuman}
              </h3>
            )}
          </div>
          <div className="info-item">
            <Image
              className="map-pin"
              alt="map pin"
              width={55}
              height={55}
              src={'/school.png'}
            />{' '}
            {loading ? (
              <Skeleton
                width={200}
                variant="text"
                sx={{
                  fontSize: '2rem',
                  bgcolor: 'rgba(255,255,255)',
                }}
              />
            ) : (
              <h3>{user?.maktab}</h3>
            )}
          </div>
          <div className="info-item">
            <Image
              className="map-pin"
              alt="map pin"
              width={55}
              height={55}
              src={'/blackboard.png'}
            />{' '}
            <h3>{user?.sinf}</h3>
          </div>
        </div>
        {/* <div className="card-qadam">
          <div className="card-steps">
            {squares.map((square) => (
              <div
                key={square}
                className={`square ${square <= user?.steps ? 'highlight' : ''}`}
              >
                <span className="tooltip">{square} qadam</span>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="card-statistic">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'100%'}
            height={'400px'}
          />
        </div> */}
      </div>
      <div className={styles.stepsMap}>
        <h1 className={styles.title}>Kelajak xaritasi</h1>
        <div className={styles.map}>
          {user && user.steps !== undefined ? (
            <StepProgress completed={user?.steps} />
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};
{
  /* <PieChart
  className="pie-chart"
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
  axisHighlight="band"
  width={400}
  height={200}
/>; */
}
export default UserProfile;
