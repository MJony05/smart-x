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
  }, [viloyat, users]);

  useEffect(() => {
    // Apply search filter
    if (search === '') {
      console.log('search is empty');
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
        <h3>O&lsquo;quvchilar royxati</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Pagination
            count={Math.ceil(filteredUsers.length / 10)}
            defaultPage={1}
            siblingCount={0}
            page={page}
            onChange={handleChange}
          />
          <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={viloyat}
              label="Viloyat"
              onChange={handleViloyatChange}
            >
              <MenuItem value="">
                <em>Barcha</em>
              </MenuItem>
              {viloyatlar.map((viloyat) => (
                <MenuItem key={viloyat} value={viloyat}>
                  {viloyat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size="small"
            id="standard-basic"
            label="Qidirish"
            variant="standard"
            value={search}
            onChange={handleSearchByName}
          />
        </div>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <p></p>
          <p>Ism</p>
          <p>Viloyat</p>
          <p>Qadam</p>
          <p>statistika</p>
        </li>
        <UserList users={slicedUsers} />
      </ul>
    </div>
  );
};

export default UserTable;