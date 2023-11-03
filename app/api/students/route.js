import { pool } from '../db';
export async function GET() {
  const getUsersQuery = 'SELECT * FROM confirmed_users';
  const client = await pool.connect();

  try {
    const result = await client.query(getUsersQuery);
    const users = result.rows;
    return new Response(JSON.stringify(users), {
      headers: {
        'content-type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } finally {
    client.release();
  }
}
