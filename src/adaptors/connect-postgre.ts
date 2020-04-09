import { Pool } from 'pg'
import { postgesLog as log } from './loggers';

require('dotenv').config();

const pgConf: any = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
};

let greeted = false
if (!greeted) {
  greeted = true;
  log.info(`Connecting to Postgres at ${pgConf.host}:${pgConf.port} as user '${pgConf.user}'`);
}

export const pool = new Pool(pgConf);