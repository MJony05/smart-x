const { Pool } = require('pg');

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1212',
  port: 5432,
});
