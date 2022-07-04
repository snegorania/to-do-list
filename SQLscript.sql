CREATE DATABASE ToDoList;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    "userName" VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE lists(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    "userId" INTEGER
    FOREIGN KEY ("userId") REFERENCES users (id)
);

CREATE TABLE lists(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    "listId" INTEGER
    FOREIGN KEY ("listId") REFERENCES lists (id)
);
