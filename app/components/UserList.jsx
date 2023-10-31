'use client';
import React from 'react';
import Link from 'next/link';
import UserItem from './UserItem';
import styles from './user.module.css';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { FormHelperText, InputLabel } from '@mui/material';
const UserList = ({ users }) => {
  const viloyatlar = [
    'Tashkent',
    'samarqand',
    'buxoro',
    'xorazm',
    'qashqadaryo',
    'surxondaryo',
    'jizzax',
    'sirdaryo',
    'navoiy',
    'andijon',
    'namangan',
    'fergana',
    'qoraqalpogiston',
  ];
  const [viloyat, setViloyat] = React.useState('');
  if (viloyat) {
    users = users.filter((user) => user.viloyat === viloyat);
  }

  return (
    <div className={styles.box}>
      <div className={styles.boxTop}>
        <h3>O&lsquo;quvchilar royxati</h3>
        <div>
          <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Viloyat
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={viloyat}
              label="Viloyat"
              onChange={(e) => setViloyat(e.target.value)}
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
        {users.map((user, i) => (
          <li
            key={user.id}
            style={{ backgroundColor: i % 2 === 0 ? 'white' : 'inherit' }}
          >
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
