import pg from 'pg';
// Note: Never log passwords in production code

const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD, // Be sure this is being loaded correctly
  database: process.env.DB_NAME || 'next_db',
  port: parseInt(process.env.DB_PORT || '5432'), // Ensure port is a number
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Add SSL for production
  max: 10,
  idleTimeoutMillis: 30000
});

// Add connection error handling
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Test connection function to validate pool setup
export const testConnection = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW()');
    console.log('Database connection successful:', res.rows[0]);
    return true;
  } catch (err) {
    console.error('Database connection failed:', err);
    return false;
  } finally {
    client.release();
  }
};

export default pool;