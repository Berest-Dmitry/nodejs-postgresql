# syntax=docker/dockerfile:1
FROM postgres:14

USER postgres

## Variables needed at runtime to configure postgres and run the initdb scripts
ENV POSTGRES_DB ''
ENV POSTGRES_USER ''
ENV POSTGRES_PASSWORD ''

COPY startup.sql /docker-entrypoint-initdb.d/
