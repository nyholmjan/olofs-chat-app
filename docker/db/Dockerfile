FROM postgres:11-alpine

WORKDIR /usr/src/app

ENV POSTGRES_USER=chat POSTGRES_PASSWORD=password POSTGRES_DB=chat

COPY ./init_db.sh /docker-entrypoint-initdb.d/init_db.sh

EXPOSE 5432