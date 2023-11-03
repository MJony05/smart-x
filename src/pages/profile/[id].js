import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Chart } from 'react-google-charts';

const UserProfile = () => {
  const router = useRouter();
  // Fetch user data based on the 'id' parameter from your database or API
  // You can use the 'id' to query and display the user's profile
  // For example, if you are using posgresql
  // const { id } = params;
  const id = router.query.id;
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const getUser = async () => {
      if (!id) return;
      const response = await fetch(`/api/students/${id}`);
      const data = await response.json();
      setUser(data[0]);
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
          <Image src="/smart-logo.png" width={200} height={30} alt="logo" />
        </div>
        <h1 className="navbar-name">{user?.full_name}</h1>
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
          <h1>{user?.full_name}</h1>
          <h2>{user?.description}</h2>
          <div className="info-item">
            <Image
              className="map-pin"
              alt="map pin"
              width={55}
              height={55}
              src={'/map-pin.png'}
            />{' '}
            <h3>
              {' ' + user?.viloyat}, {user?.tuman}
            </h3>
          </div>
          <div className="info-item">
            <Image
              className="map-pin"
              alt="map pin"
              width={55}
              height={55}
              src={'/school.png'}
            />{' '}
            <h3>{user?.maktab}</h3>
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
        <div className="card-qadam">
          <div className="card-steps">
            {/* here should be 310 grey square and step number should green */}
            {squares.map((square) => (
              <div
                key={square}
                className={`square ${square <= user?.steps ? 'highlight' : ''}`}
              >
                <span className="tooltip">{square} qadam</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-statistic">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={'100%'}
            height={'400px'}
          />
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
