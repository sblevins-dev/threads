import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
    ssl: {
        rejectUnauthorized: false // Use true if you have a proper SSL certificate setup
      }
})

export default pool;