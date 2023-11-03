// pages/api/getUsers.js

import { pool } from '../db';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;
  if (req.method === 'GET') {
    try {
      const getUsersQuery = `SELECT * FROM confirmed_users  WHERE chat_id=${id}`;
      const client = await pool.connect();

      const result = await client.query(getUsersQuery);
      const users = result.rows;

      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
