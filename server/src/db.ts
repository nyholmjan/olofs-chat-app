import * as pgp from 'pg-promise'
import * as dotenv from 'dotenv'

dotenv.config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

export const db = pgp()(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`)
