import pg from "pg";
import env from "dotenv";
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE_2,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();
