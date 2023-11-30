// pages/api/getUsers.js

import { pool } from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const getUsersQuery = 'SELECT * FROM confirmed_users ';
      const client = await pool.connect();

      const result = await client.query(getUsersQuery);
      const users = result.rows;
      users.sort((a, b) => b.steps - a.steps);
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
