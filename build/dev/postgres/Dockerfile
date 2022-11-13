# syntax=docker/dockerfile:1
FROM postgres:14

USER postgres

## Variables needed at runtime to configure postgres and run the initdb scripts
ENV POSTGRES_DB=test
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

COPY startup.sql /docker-entrypoint-initdb.d/
