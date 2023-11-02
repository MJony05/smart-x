'use client';
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  TablePagination,
  TextField,
} from '@mui/material';
import UserList from './UserList';
import styles from './user.module.css';
import Image from 'next/image';
import { auto } from '@popperjs/core';

const UserTable = ({ users }) => {
  const viloyatlar = [
    'Tashkent',
    'Samarqand',
    'Buxoro',
    'Xorazm',
    'Qashqadaryo',
    'Surxondaryo',
    'Jizzax',
    'Sirdaryo',
    'Navoiy',
    'Andijon',
    'Namangan',
    'Fergana',
    'Qoraqalpogiston',
  ];

  const [search, setSearch] = useState('');
  const [viloyat, setViloyat] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    // Apply viloyat filter
    if (viloyat === '') {
      setFilteredUsers(users);
    } else {
      const nameFilteredUsersArray = users.filter((user) =>
        user.full_name.toLowerCase().includes(search.toLowerCase())
      );
      const viloyatFilteredUsers = nameFilteredUsersArray.filter(
        (user) => user.viloyat === viloyat
      );
      setFilteredUsers(viloyatFilteredUsers);
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viloyat, users]);

  useEffect(() => {
    // Apply search filter
    if (search === '') {
      if (viloyat === '') {
        setFilteredUsers(users);
      } else {
        const viloyatFilteredUsersArray = users.filter(
          (user) => user.viloyat === viloyat
        );

        setFilteredUsers(viloyatFilteredUsersArray);
      }
    } else {
      if (viloyat !== '') {
        const viloyatFilteredUsersArray = users.filter(
          (user) => user.viloyat === viloyat
        );
        const nameFilteredUsers = viloyatFilteredUsersArray.filter((user) =>
          user.full_name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(nameFilteredUsers);
      } else {
        const nameFilteredUsers = users.filter((user) =>
          user.full_name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(nameFilteredUsers);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, users]);

  const handleViloyatChange = (event) => {
    setViloyat(event.target.value);
  };

  const handleSearchByName = (e) => {
    setSearch(e.target.value);
  };
  const [page, setPage] = React.useState(1);
  const [slicedUsers, setSlicedUsers] = useState([]); // [0, 8
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [search, viloyat]);

  useEffect(() => {
    const slicedUsers = filteredUsers.slice((page - 1) * 10, page * 10);
    setSlicedUsers(slicedUsers);
  }, [page, filteredUsers]);
  return (
    <div className={styles.box}>
      <div className={styles.boxTop}>
        <h3>O&lsquo;quvchilar ro&lsquo;yxati</h3>
        <div className={styles.middle}>
          <select
            className={styles.customSelect}
            value={viloyat}
            onChange={handleViloyatChange}
          >
            <option value="">Barcha</option>
            {viloyatlar.map((viloyat) => (
              <option key={viloyat} value={viloyat}>
                {viloyat}
              </option>
            ))}
          </select>
          <input
            type="text"
            className={styles.customInput}
            placeholder="Qidirish"
            value={search}
            onChange={handleSearchByName}
          />
        </div>
        <div className={styles.topImage}>
          <Image alt="logo" src="/smart-logo.png" width={200} height={30} />
        </div>
      </div>
      <ul className={styles.ul}>
        <li className={styles.tableNav} style={{ backgroundColor: 'inherit' }}>
          <p></p>
          <p className={styles.tableHeads}>Ism/Familiya</p>
          <p className={styles.tableHeads}>Viloyat</p>
          <p
            className={styles.steps}
            style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}
          >
            Qadam
          </p>
          <p className={styles.tableHeads}>Statistika</p>
        </li>
        <UserList users={slicedUsers} />
      </ul>
      <Pagination
        className={styles.pagination}
        count={Math.ceil(filteredUsers.length / 10)}
        defaultPage={1}
        siblingCount={1}
        page={page}
        onChange={handleChange}
        style={{
          color: 'white',
        }}
      />
    </div>
  );
};

export default UserTable;
