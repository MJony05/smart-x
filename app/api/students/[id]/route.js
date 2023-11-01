import { pool } from '../../db';
export async function GET(req) {
  const url = req.url;
  const id = url.split(':').pop();
  const getUserByIdQuery = `SELECT * FROM confirmed_users WHERE id=${id}`;
  const client = await pool.connect();

  try {
    const result = await client.query(getUserByIdQuery);
    const users = result.rows;
    return new Response(JSON.stringify(users), {
      headers: { 'content-type': 'application/json' },
    });
  } finally {
    client.release();
  }
}
