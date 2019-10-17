#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER postgres;
    GRANT ALL ON SCHEMA public TO postgres;
    CREATE TABLE messages (
        id serial PRIMARY KEY,
        message VARCHAR (160) NOT NULL,
        user_name VARCHAR (20) NOT NULL,
        channel VARCHAR (20) NOT NULL,
        timestamp TIMESTAMP NOT NULL
    ); 
EOSQL
