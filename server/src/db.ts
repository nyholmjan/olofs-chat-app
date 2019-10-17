import * as pgp from 'pg-promise'
import * as dotenv from 'dotenv'

dotenv.config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

const db = pgp()(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`)

db.any('SELECT * FROM messages;').then(rows => {
  console.log('this is fine')
}).catch(error => {
  db.none(`
    CREATE TABLE messages (
    id serial PRIMARY KEY,
    message VARCHAR (160) NOT NULL,
    user_name VARCHAR (20) NOT NULL,
    channel VARCHAR (20) NOT NULL,
    timestamp TIMESTAMP NOT NULL)`)
});

export default db
