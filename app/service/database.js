// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1212',
  port: 5432,
});
export async function GetStudentsData() {
  const getUsersQuery = 'SELECT * FROM confirmed_users';
  const client = await pool.connect();

  try {
    const result = await client.query(getUsersQuery);
    const users = result.rows;

    return users;
  } finally {
    client.release();
  }
}
